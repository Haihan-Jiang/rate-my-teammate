package com.cwru.backend.controller;
import com.cwru.backend.dal.entities.*;
import com.cwru.backend.repositories.ReviewNegativeTagRepository;
import com.cwru.backend.repositories.ReviewPositiveTagRepository;
import com.cwru.backend.service.NegativeTagService;
import com.cwru.backend.service.PositiveTagService;
import com.cwru.backend.dal.entities.Review;
import com.cwru.backend.service.ProfileService;
import com.cwru.backend.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import com.cwru.backend.repositories.ReviewRepository;
import java.util.List;

@RestController
@RequestMapping("/Review")
@CrossOrigin(origins = "*",maxAge = 3600)
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @Autowired

    private NegativeTagService negativeTagService;

    @Autowired
    private PositiveTagService positiveTagService;

    @Autowired
    private ProfileService profileService;

    @Autowired
    private ReviewRepository repo;

    @Autowired
    private ReviewNegativeTagRepository rntRepo;

    @Autowired
    private ReviewPositiveTagRepository rptRepo;



    private NegativeTagController negativeTagController;

    private PositiveTagsController positiveTagsController;

    @PostMapping("/add/{pageId}/{accountId}")
    public Long add(@PathVariable Long pageId, @PathVariable Long accountId,
                    @RequestBody Review review) {
        ArrayList<Review> reviews = repo.queryReviewByPageIDandAccountID(pageId, accountId);
        if (reviews.isEmpty()) {
            reviewService.saveReview(review);
            autoUpdateProfile(review);
            Long reviewID = review.getId();
            return reviewID;
        } else {
            return -1L;
        }
    }

    @RequestMapping(path = "/update/{pageId}/{accountId}", method = RequestMethod.POST)
    public Long update(@RequestBody Review review, @PathVariable Long pageId, @PathVariable Long accountId){
        Review updateReview = getUpdateReview(accountId, pageId);
        autoUpdateReview(updateReview, review.getEaseOfContact(), review.getTimeLiness(), review.getContribution(),
                review.getRespectful(), review.getCourse(), review.getSemesterAndYear(), review.getWorkAgain(),
                review.getGrade(), review.getComments());
        autoUpdateProfile(review);
        return updateReview.getId();
    }

    public Review getUpdateReview(Long accountId, Long pageId) {
        List<Review> reviewList = reviewService.getAllReview();
        Review review = null;
        for (int i = 0; i < reviewList.size(); i++) {
            if (reviewList.get(i).getAccountId() == accountId && reviewList.get(i).getPageId() == pageId) {
                review = reviewList.get(i);
                break;
            }
        }
        return review;
    }

    public void autoUpdateReview(
            Review review,
            Double easeOfContact, Double timeLiness, Double contribution, Double respectful, String course, 
            String semesterAndYear, Boolean workAgain, Character grade, String comments) {
        review.setEaseOfContact(easeOfContact);
        review.setTimeLiness(timeLiness);
        review.setContribution(contribution);
        review.setRespectful(respectful);
        review.setCourse(course);
        review.setSemesterAndYear(semesterAndYear);
        review.setWorkAgain(workAgain);
        review.setGrade(grade);
        review.setComments(comments);
        reviewService.updateReview(review);
    }

    public void autoUpdateProfile(Review review) {

        //Using reviewId to get pageIds
        Profile profile =new Profile();
        profile = profileService.getProfileById(review.getPageId());
        long pageId =profile.getId();




        int total = repo.queryReviewByPageID(pageId).size();

        double sumOfEaseOfContact = 0.0;
        double sumOfTimeliness =0.0;
        double sumOfContribution = 0.0;
        double sumOfRespectful =0.0;
        double sumOfOverall =0.0;

        System.out.println("total"+total);
        for(int i=0;i<total;i++){
            double ec=repo.queryReviewByPageID(pageId).get(i).getEaseOfContact();
            System.out.println("----------------------------------------------------------------");
            double cb=repo.queryReviewByPageID(pageId).get(i).getContribution();
            double rt=repo.queryReviewByPageID(pageId).get(i).getRespectful();
            double time = repo.queryReviewByPageID(pageId).get(i).getTimeLiness();
            double overall1 = (ec+cb+rt+time)/4;
            System.out.println("dashdas"+time);
            sumOfTimeliness+=time;

            sumOfContribution+=cb;
            sumOfRespectful+=rt;
            sumOfEaseOfContact+=ec;
            sumOfOverall+=overall1;
        }
        System.out.println("EC"+sumOfEaseOfContact);
        System.out.println("Time"+sumOfTimeliness);
        double averageEc = Math.round((sumOfEaseOfContact*2)/(total))/2;
        double averageCb = Math.round((sumOfContribution*2)/(total))/2;
        double averageRt = Math.round((sumOfRespectful*2)/(total))/2;
        double averageTime = Math.round((sumOfTimeliness*2)/(total))/2;
        double averageOverall =Math.round((sumOfOverall*2)/(total))/2;
        System.out.println("AvgTime"+averageTime);

        profile.setTimeLiness(averageTime);
        profile.setRespectful(averageRt);
        profile.setContribution(averageCb);
        profile.setEaseOfContact(averageEc);
        profile.setOverallRating(averageOverall);
        profileService.updateProfile(profile);

    }






    public  class Merge{
        private  ArrayList<Review> review;
        private  ArrayList<NegativeTag> negativeTag;
        private  ArrayList<PositiveTags> positiveTag;

        public Merge(ArrayList<Review> review, ArrayList<NegativeTag> negativeTag, ArrayList<PositiveTags> positiveTag) {
            this.review = review;
            this.negativeTag = negativeTag;
            this.positiveTag = positiveTag;
        }

        public ArrayList<Review> getReview() {
            return review;
        }

        public void setReview(ArrayList<Review> review) {
            this.review = review;
        }

        public ArrayList<NegativeTag> getNegativeTag() {
            return negativeTag;
        }

        public void setNegativeTag(ArrayList<NegativeTag> negativeTag) {
            this.negativeTag = negativeTag;
        }

        public ArrayList<PositiveTags> getPositiveTag() {
            return positiveTag;
        }

        public void setPositiveTag(ArrayList<PositiveTags> positiveTag) {
            this.positiveTag = positiveTag;
        }
    }


    @GetMapping(path = "/get/{pageId}/{accountId}", produces = { "application/json" })
    public Merge getReviewByPageIdAccountId(@PathVariable Long pageId, @PathVariable Long accountId) {
        ArrayList<Review> review = repo.queryReviewByPageIDandAccountID(pageId, accountId);
        ArrayList<ReviewNegativeTag> reviewNegativeTags = new ArrayList<>();
        ArrayList<NegativeTag> finalNegTags = new ArrayList<>();
        ArrayList<PositiveTags> finalPosTags = new ArrayList<>();
        ArrayList<ReviewPositiveTag> reviewPositiveTags = new ArrayList<>();

        // query negativeTagList
        Long reviewId = review.get(0).getId();
        // using reviewId to find reviewNegative Tags
        reviewNegativeTags = rntRepo.queryReviewNegativeTagByReviewId(reviewId);
        for (int j = 0; j < reviewNegativeTags.size(); j++) {
            // using review NegativeTagId to find ReviewNegativeTag
            Long negativeTagId = reviewNegativeTags.get(j).getNegativeTagId();
            NegativeTag negativeTag = negativeTagService.getNegTagById(negativeTagId);
            finalNegTags.add(negativeTag);
        }

        // using reviewId to find reviewNegative Tags
        reviewPositiveTags = rptRepo.queryReviewPositiveTagByReviewId(reviewId);
        for (int j = 0; j < reviewPositiveTags.size(); j++) {
            // using review PositiveTagId to find PositiveNegativeTag
            Long positiveTagId = reviewPositiveTags.get(j).getPositiveTagId();
            PositiveTags posTags = positiveTagService.getPosTagById(positiveTagId);
            finalPosTags.add(posTags);
        }

        Merge merge = new Merge(review, finalNegTags, finalPosTags);
        return merge;
    }

    public class Merge2 {
        private Review review;
        private ArrayList<NegativeTag> negativeTag =new ArrayList<>();
        private ArrayList<PositiveTags> positiveTag = new ArrayList<>();
    
    
        public Review getReview() {
            return review;
        }
    
        public void setReview(Review review) {
            this.review = review;
        }
    
        public ArrayList<NegativeTag> getNegativeTag() {
            return negativeTag;
        }
    
        public void setNegativeTag(NegativeTag negativeTag) {
            this.negativeTag.add(negativeTag);
        }
    
        public ArrayList<PositiveTags> getPositiveTag() {
            return positiveTag;
        }
    
        public void setPositiveTag(PositiveTags positiveTag) {
            this.positiveTag.add(positiveTag);
        }
    }

    public ArrayList<ReviewNegativeTag> getNegTagsByReviewId(Long reviewId){
        ArrayList<ReviewNegativeTag> reviewNegativeTags = new ArrayList<>();
        reviewNegativeTags = rntRepo.queryReviewNegativeTagByReviewId(reviewId);
        return reviewNegativeTags;
    }
    
    public ArrayList<ReviewPositiveTag> getPosTagsByReviewId(Long reviewId){
        ArrayList<ReviewPositiveTag> reviewPositiveTags = new ArrayList<>();
        reviewPositiveTags = rptRepo.queryReviewPositiveTagByReviewId(reviewId);
        return reviewPositiveTags;
    }

    @GetMapping(path = "/getAll/{pageId}", produces = {"application/json"})
    public ArrayList<Merge2> getReviewByPageId(@PathVariable Long pageId) {
        ArrayList<Review> reviews = repo.queryReviewByPageID(pageId);
//        ArrayList<ReviewNegativeTag> reviewNegativeTags = new ArrayList<>();
        ArrayList<NegativeTag> finalNegTags = new ArrayList<>();
        ArrayList<PositiveTags> finalPosTags = new ArrayList<>();
//        ArrayList<ReviewPositiveTag> reviewPositiveTags = new ArrayList<>();
        ArrayList<Merge2> merges = new ArrayList<>();

        //Looping through Reviews
        for (int i = 0; i < reviews.size(); i++) {
            Merge2 merge2 = new Merge2();
            Long reviewId = reviews.get(i).getId();


            System.out.println("size of i"+getNegTagsByReviewId(reviewId).size());
            for (int j = 0; j < getNegTagsByReviewId(reviewId).size(); j++) {
                //using review NegativeTagId to find ReviewNegativeTag
                Long negativeTagId = getNegTagsByReviewId(reviewId).get(j).getNegativeTagId();
                merge2.setNegativeTag( negativeTagService.getNegTagById(negativeTagId));
            }

            System.out.println("size of J"+getPosTagsByReviewId(reviewId).size());
            for (int j = 0; j < getPosTagsByReviewId(reviewId).size(); j++) {
                //using review PositiveTagId to find PositiveNegativeTag
                Long positiveTagId = getPosTagsByReviewId(reviewId).get(j).getPositiveTagId();
                merge2.setPositiveTag(positiveTagService.getPosTagById(positiveTagId));
            }


            merge2.setReview(reviews.get(i));

            merges.add(merge2);



        }
        return merges;
    }
}
