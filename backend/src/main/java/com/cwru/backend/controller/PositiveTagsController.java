package com.cwru.backend.controller;
import com.cwru.backend.dal.entities.*;
import com.cwru.backend.repositories.*;
import com.cwru.backend.service.PositiveTagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/PosTags")
public class PositiveTagsController {

    @Autowired
    private PositiveTagService positiveTagService;

    @Autowired
    private PositiveTagRepository repo;

    @Autowired
    private ReviewRepository reviewRepo;

    @Autowired
    private ReviewPositiveTagRepository rptRepo;


    public ArrayList<String> getAllPosTags() {
        List<PositiveTags> posTagsList = positiveTagService.getAllPositiveTags();
        ArrayList<String> posTags = new ArrayList<String>();
        for (int i = 0; i < posTagsList.size(); i++) {
            posTags.add(i, posTagsList.get(i).getPositiveTag().toLowerCase());
        }
        return posTags;
    }

    @PostMapping("/add")
    public String add(@RequestBody PositiveTags positiveTag){
        ArrayList<String> posTags = getAllPosTags();
        String posTag = positiveTag.getPositiveTag();
        System.out.println(posTag);
        System.out.println(positiveTag.getId());

        if (posTags.contains(posTag.toLowerCase())){
            return "This positive tag already existed.";
        }
        else{
            positiveTagService.savePositiveTags(positiveTag);
            return "Positive Tag is added.";

        }
    }

    @GetMapping(value = "/get",produces = { "application/json" })
    public ArrayList<PositiveTags> get(@RequestParam(name="pageId", required = true) Long pageId){
        return getPositiveTagsByPageId(pageId);
    }

    public ArrayList<PositiveTags> getPositiveTagsByPageId(Long pageId){
        //using pageId to find reviews
        ArrayList<Review> reviews = reviewRepo.queryReviewByPageID(pageId);
        ArrayList<ReviewPositiveTag> reviewPositiveTags =new ArrayList<>();
        ArrayList<PositiveTags> result =new ArrayList<>();

        for(int i=0;i<reviews.size();i++){
            Long reviewId = reviews.get(i).getId();
            //using reviewId to find reviewNegative Tags
            reviewPositiveTags = rptRepo.queryReviewPositiveTagByReviewId(reviewId);
            for(int j=0;j<reviewPositiveTags.size();j++){
                //using review PositiveTagId to find PositiveNegativeTag
                Long positiveTagId = reviewPositiveTags.get(j).getPositiveTagId();
                System.out.println("--------------------------------------------------------"+i);
                PositiveTags positiveTags = positiveTagService.getPosTagById(positiveTagId);
                result.add(positiveTags);

            }
        }
        return result;
    }

    @GetMapping("/getAll")
    public List<PositiveTags> getAllPosTag() {
        return positiveTagService.getAllPositiveTags();
    }




}
