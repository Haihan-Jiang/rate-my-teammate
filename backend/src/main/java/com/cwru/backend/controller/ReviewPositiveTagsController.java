package com.cwru.backend.controller;
import com.cwru.backend.dal.entities.*;
import com.cwru.backend.service.ProfileService;
import com.cwru.backend.service.ReviewPositiveTagService;
import org.springframework.beans.factory.annotation.Autowired;
import com.cwru.backend.repositories.ReviewPositiveTagRepository;

import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/ReviewPosTags")
public class ReviewPositiveTagsController{

    @Autowired
    private ReviewPositiveTagService rptService;

    @Autowired
    private ProfileService profileService;

    @Autowired
    private ReviewPositiveTagRepository rptRepo;

    @PostMapping("/add/{reviewID}")
    public String addReviewPosTags(@PathVariable Long reviewID, @RequestBody Long positiveTagID) {
        ArrayList<ReviewPositiveTag> rptList = rptRepo.queryReviewPositiveTagByReviewId(reviewID);
        boolean exist = false;
        for(int i = 0; i < rptList.size(); i++){
            if(rptList.get(i).getPositiveTagId() == positiveTagID){
                exist = true;
                break;
            }
        }
        if(!exist){
            ReviewPositiveTag rpt = new ReviewPositiveTag();
            rpt.setPositiveTagId(positiveTagID);
            rpt.setReviewId(reviewID);
            rptService.saveReviewPositiveTag(rpt);
            return "Pos Tag is saved.";
        }
        else{
            return "pos tag already existed in this review.";
        }
    }

    @DeleteMapping("/deleteAll/{reviewID}")
    public void deleteReviewPosTags(@PathVariable Long reviewID) {
        ArrayList<ReviewPositiveTag> nptList = rptRepo.queryReviewPositiveTagByReviewId(reviewID);
        for (int i = 0; i < nptList.size(); i++) {
            rptService.deleteReviewPositiveTag(nptList.get(i));
        }
    }



}
