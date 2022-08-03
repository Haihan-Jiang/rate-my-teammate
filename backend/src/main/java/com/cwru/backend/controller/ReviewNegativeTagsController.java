package com.cwru.backend.controller;
import com.cwru.backend.dal.entities.*;
import com.cwru.backend.service.ReviewNegativeTagService;
import org.springframework.beans.factory.annotation.Autowired;
import com.cwru.backend.repositories.ReviewNegativeTagRepository;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/ReviewNegTags")
public class ReviewNegativeTagsController{

    @Autowired
    private ReviewNegativeTagService rntService;

    @Autowired
    private ReviewNegativeTagRepository rntRepo;

    @PostMapping("/add/{reviewID}")
    public String addReviewNegTags(@PathVariable Long reviewID, @RequestBody Long negTagID) {
        ArrayList<ReviewNegativeTag> nptList = rntRepo.queryReviewNegativeTagByReviewId(reviewID);
        boolean exist = false;
        for(int i = 0; i < nptList.size(); i++){
            if(nptList.get(i).getNegativeTagId() == negTagID){
                exist = true;
                break;
            }
        }
        if(!exist){
            ReviewNegativeTag rnt = new ReviewNegativeTag();
            rnt.setNegativeTagId(negTagID);
            rnt.setReviewId(reviewID);
            rntService.saveReviewNegativeTag(rnt);
            return "Neg Tag is saved.";
        }
        else{
            return "Neg tag already existed in this review.";
        }
    }
    @DeleteMapping("/deleteAll/{reviewID}")
    public void deleteReviewNegTags(@PathVariable Long reviewID){
        ArrayList<ReviewNegativeTag> nptList = rntRepo.queryReviewNegativeTagByReviewId(reviewID);
        System.out.println(nptList);
        for(int i = 0; i < nptList.size(); i++){
            rntService.deleteReviewNegativeTag(nptList.get(i));
        }
    }
}
