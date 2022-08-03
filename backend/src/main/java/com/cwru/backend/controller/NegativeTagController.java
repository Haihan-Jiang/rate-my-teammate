package com.cwru.backend.controller;
import com.cwru.backend.dal.entities.NegativeTag;
import com.cwru.backend.dal.entities.Review;
import com.cwru.backend.dal.entities.ReviewNegativeTag;
import com.cwru.backend.repositories.NegativeTagRepository;
import com.cwru.backend.repositories.ReviewNegativeTagRepository;
import com.cwru.backend.repositories.ReviewRepository;
import com.cwru.backend.service.NegativeTagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/NegTags")
@CrossOrigin(origins = "*",maxAge = 3600)

public class NegativeTagController {
    @Autowired
    private NegativeTagService negativeTagService;

    @Autowired
    private NegativeTagRepository repo;

    @Autowired
    private ReviewRepository reviewRepo;

    @Autowired
    private ReviewNegativeTagRepository rntRepo;

    public ArrayList<String> getAllNegativeTags() {
        List<NegativeTag> negTagsList = negativeTagService.getAllNegativeTag();
        ArrayList<String> negTags = new ArrayList<String>();
        for (int i = 0; i < negTagsList.size(); i++) {
            negTags.add(i, negTagsList.get(i).getNegativeTag().toLowerCase());
        }
        return negTags;
    }

    @PostMapping("/add")
    public String add(@RequestBody NegativeTag negativeTag){
        ArrayList<String> negTags = getAllNegativeTags();
        System.out.println(negTags);
        String negTag = negativeTag.getNegativeTag();
        if (negTags.contains(negTag.toLowerCase())) {
            return "This negtive tag already existed.";
        }
        else{
            negativeTagService.saveNegativeTag(negativeTag);
            return "negative Tag is added";
        }
    }

    @GetMapping(value = "/get",produces = { "application/json" })
    public ArrayList<NegativeTag> get(@RequestParam(name="pageId", required = true) Long pageId){
        return getNegativeTagsByPageId(pageId);
    }

    public ArrayList<NegativeTag> getNegativeTagsByPageId(Long pageId){
        ArrayList<Review> reviews = reviewRepo.queryReviewByPageID(pageId);
        ArrayList<ReviewNegativeTag> reviewNegativeTags =new ArrayList<>();
        ArrayList<NegativeTag> result =new ArrayList<>();

        for(int i=0;i<reviews.size();i++){
            Long reviewId = reviews.get(i).getId();
            //using reviewId to find reviewNegative Tags
            reviewNegativeTags = rntRepo.queryReviewNegativeTagByReviewId(reviewId);
            for(int j=0;j<reviewNegativeTags.size();j++){
                //using review NegativeTagId to find ReviewNegativeTag
                Long negativeTagId = reviewNegativeTags.get(j).getNegativeTagId();
                NegativeTag negativeTag = negativeTagService.getNegTagById(negativeTagId);
                result.add(negativeTag);
            }
        }
        return result;
    }




    @GetMapping("/getAll")
    public List<NegativeTag> getAllNegTag() {
        return negativeTagService.getAllNegativeTag();
    }

}
