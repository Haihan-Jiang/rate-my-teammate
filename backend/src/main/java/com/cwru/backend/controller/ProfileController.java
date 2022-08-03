package com.cwru.backend.controller;

import com.cwru.backend.dal.entities.*;
import com.cwru.backend.repositories.*;
import com.cwru.backend.service.NegativeTagService;
import com.cwru.backend.service.PositiveTagService;
import com.cwru.backend.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import java.util.Calendar;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/Profile")
public class ProfileController {
    //Autowired a profile service
    @Autowired
    private ProfileService profileService;

    @Autowired
    private PositiveTagService positiveTagService;

    @Autowired
    private NegativeTagService negativeTagService;

    @Autowired
    private ProfileRepository repo;

    @Autowired
    private ReviewRepository reviewRepo;

    @Autowired
    private ReviewPositiveTagRepository rpt;

    @Autowired
    private ReviewNegativeTagRepository rnt;

    @Autowired
    private MajorRepository repo1;

    //Method for getting all caseIds
    public ArrayList<String> getAllCaseId(Profile profile){
        List<Profile> profileList = profileService.getAllProfile();
        ArrayList<String> caseIdList = new ArrayList<String>();
        for(int i=0;i<profileList.size();i++){
            caseIdList.add(i,profileList.get(i).getCaseID());
        }
        return caseIdList;
    }

    @PostMapping(value="/addNewStudent", produces={ "application/json" })
    public int addNewStudent(@RequestBody Profile profile){
        Integer curYr = Calendar.getInstance().get(Calendar.YEAR);
        Integer gradYr = profile.getGraduationYear();
        if (curYr > gradYr) {
            profile.setGraduationStatus(true);
        } else {
            profile.setGraduationStatus(false);
        }
        //Parmeters in Profile
        String caseId = profile.getCaseID();
        List<String> caseIdList = getAllCaseId(profile);
        //If exists and matches,success.
        if(caseIdList.contains(caseId) ){
            return -1;
        }
        //If it does not match, failed.
        else {
            profileService.saveProfile(profile);
            return 1;
        }
    }

    public  class Merge{
        private  Profile profile;
        private  ArrayList<NegativeTag> negativeTag;
        private  ArrayList<PositiveTags> positiveTag;

        public Merge(Profile profile, ArrayList<NegativeTag> negativeTag, ArrayList<PositiveTags> positiveTag) {
            this.profile = profile;
            this.negativeTag = negativeTag;
            this.positiveTag = positiveTag;
        }

        public Profile getProfile() {
            return profile;
        }

        public void setProfile(Profile profile) {
            this.profile = profile;
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

    @GetMapping(value="/search", produces={ "application/json" })
    public ArrayList<Merge> search(@RequestParam(name="caseId", required = false) String caseId, @RequestParam(value = "firstname", required = false) String firstname, @RequestParam(value ="lastname",required = false) String lastname, @RequestParam(value="major",required = false) String major)
    {
        String caseID = caseId;
        String firstName =firstname;
        String lastName = lastname;
        String major1 =major;


//      ArrayList<String> caseIdList = getAllCaseId(profile);
        ArrayList<Profile> result = new ArrayList<Profile>();
        boolean execute = false;
        System.out.println(caseID);
        if(caseID!=null){
           result = repo.queryProfileByCaseId(caseID);
           execute =true;
        }

        if(firstName!=null&&lastName!=null&&!execute){
            result = repo.queryProfileByFullName(lastName,firstName);
            execute =true;
        }

        if((firstName!=null||lastName!=null)&&!execute) {
            if (firstName != null) {
                result = repo.queryProfileByFirstName(firstName);
                execute =true;
            }
            if (lastName != null) {
                result = repo.queryProfileByLastName(lastName);
                execute =true;
            }
        }

        if(major1!=null&&!execute){
            Long majorId = repo1.queryMajorIdByMajors(major1);
            System.out.println("majotID"+majorId);
            result=repo.queryProfileByMajorId(majorId);

            execute=true;
        }

        PositiveTagsController pt =new PositiveTagsController();
        NegativeTagController nt =new NegativeTagController();
        ArrayList<Merge> merges =new ArrayList<>();
        for(int i=0;i<result.size();i++){

            Profile a =new Profile();
            ArrayList<PositiveTags> posTag =new ArrayList<>();
            ArrayList<NegativeTag> negTag =new ArrayList<>();

//        ArrayList<Review> reviews =new ArrayList<>();
            Merge merge =new Merge(a,negTag,posTag);

            //setting profile into merge
            System.out.println("ssssssss"+result.get(i));
            merge.setProfile(result.get(i));

            Profile b=new Profile();
            Long pageId =result.get(i).getId();
            if(result.get(i)!=null) {

                //getting positive tags
                ArrayList<Review> reviewList =new ArrayList<>();
                reviewList = reviewRepo.queryReviewByPageID(pageId);
                ArrayList<ReviewPositiveTag> reviewPositiveTags =new ArrayList<>();
                ArrayList<PositiveTags> posTags =new ArrayList<>();

                for(int j=0;j<reviewList.size();j++){
                    Long reviewId = reviewList.get(j).getId();
                    //using reviewId to find reviewPositive Tags
                    reviewPositiveTags = rpt.queryReviewPositiveTagByReviewId(reviewId);
                    for(int k=0;k<reviewPositiveTags.size();k++){
                        //using review PositiveTagId to find PositiveNegativeTag
                        Long positiveTagId = reviewPositiveTags.get(k).getPositiveTagId();

                        PositiveTags positiveTags = positiveTagService.getPosTagById(positiveTagId);
                        posTags.add(positiveTags);
                    }
                }


                //getting negative tags
                ArrayList<ReviewNegativeTag> reviewNegativeTags =new ArrayList<>();
                ArrayList<NegativeTag> negTags =new ArrayList<>();

                for(int j=0;j<reviewList.size();j++){
                    Long reviewId = reviewList.get(j).getId();
                    //using reviewId to find reviewPositive Tags
                    reviewNegativeTags = rnt.queryReviewNegativeTagByReviewId(reviewId);
                    for(int k=0;k<reviewNegativeTags.size();k++){
                        //using review PositiveTagId to find PositiveNegativeTag
                        Long negativeTagId = reviewNegativeTags.get(k).getNegativeTagId();
                        System.out.println("--------------------------------------------------------"+i);
                        NegativeTag negativeTags = negativeTagService.getNegTagById(negativeTagId);
                        negTags.add(negativeTags);
                    }
                }

                merge.setNegativeTag(negTags);
                merge.setPositiveTag(posTags);
            }


            merges.add(merge);
        }

        return merges;
    }

    @GetMapping(value = "/get",produces={ "application/json" })
    public Profile getProfile(@RequestParam(name ="PAGE_ID",required = true) Long pageId){
        return profileService.getProfileById(pageId);
    }
}
