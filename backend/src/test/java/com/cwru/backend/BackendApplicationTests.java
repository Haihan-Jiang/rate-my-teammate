package com.cwru.backend;

import com.cwru.backend.dal.entities.*;
import com.cwru.backend.repositories.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.sql.Date;

@SpringBootTest
class BackendApplicationTests {

    @Autowired
    private MajorRepository repo;

    @Autowired
    private NegativeTagRepository repo2;

    @Autowired
    private PositiveTagRepository repo3;

    @Autowired
    private AccountRepository repo4;

    @Autowired
    private ProfileRepository repo5;

    @Autowired
    private ReviewRepository repo6;

    @Autowired
    private ReviewNegativeTagRepository repo7;

    @Autowired
    private ReviewPositiveTagRepository repo8;


    /**
     * Test Methods for Majors' CRUD Operations
     */

    @Test
    void testCreateMajor() {
        Majors major1 = new Majors();
        major1.setMajor("Computer Science");
        repo.save(major1);
    }

    @Test
    void testFindMajorById () {
        Majors major2 = repo.findById(6L).get();
        System.out.println(major2);
    }

    @Test
    void testUpdateMajor(){
        Majors major2 = repo.findById(6L).get();
        major2.setMajor("Math");
        repo.save(major2);
        System.out.println(repo.findById(6L).get());
    }

    @Test
    void testDeleteMajor(){
        Majors major2 = repo.findById(6L).get();
        repo.delete(major2);
    }

    /**
     * Test Methods for NegativeTag's CRUD Operations
     */

    @Test
    void testCreateNegativeTag() {
        NegativeTag negativeTag = new NegativeTag();
        negativeTag.setNegativeTag("Sucks");
        repo2.save(negativeTag);
    }

    @Test
    void testFindNegativeTagById () {
        NegativeTag negativeTag2 = repo2.findById(4L).get();
        System.out.println(negativeTag2);
    }

    @Test
    void testUpdateNegativeTag(){
        NegativeTag negativeTag2 = repo2.findById(4L).get();
        negativeTag2.setNegativeTag("Updated");
        repo2.save(negativeTag2);
        System.out.println(negativeTag2);
    }

    @Test
    void testDeleteNegativeTag(){
        NegativeTag negativeTag2 = repo2.findById(4L).get();
        repo2.delete(negativeTag2);
    }

    /**
     * Test Methods for PositiveTag's CRUD Operations
     */
    @Test
    void testCreatePositiveTag() {
        PositiveTags positiveTag = new PositiveTags();
        positiveTag.setPositiveTag("Good");
        repo3.save(positiveTag);
    }

    @Test
    void testFindPositiveTagById () {
        PositiveTags positiveTag2 = repo3.findById(1L).get();
        System.out.println(positiveTag2);
    }

    @Test
    void testUpdatePositiveTag(){
        PositiveTags positiveTag2 = repo3.findById(1L).get();
        positiveTag2.setPositiveTag("Updated123");
        repo3.save(positiveTag2);
        System.out.println(positiveTag2);
    }

    @Test
    void testDeletePositiveTag(){
        PositiveTags positiveTag2 = repo3.findById(1L).get();
        repo3.delete(positiveTag2);
    }

    /**
     * Test Methods for Account's CRUD Operations
     */
    @Test
    void testCreateAccount() {
        Account account = new Account();
        //account.setAccountId(7L);
        account.setCaseId("hxj235");
        account.setFirstname("Haihan");
        account.setLastname("Jiang");
        account.setPassword("3333L");
        account.setFirstMajorId(6L);
//        account.setSecondMajorId(5555);
        account.setGraduationYear(6666);
        account.setCaseId("1123");
        repo4.save(account);
    }

    @Test
    void testFindAccountById () {
        Account account1 = repo4.findById(14L).get();
        System.out.println(account1);
    }

    @Test
    void testUpdateAccount(){
        Account account2 = repo4.findById(14L).get();
        //account2.setAccountId(7823L);
        account2.setCaseId("2323");
        account2.setFirstname("Changess");
        account2.setPassword("783L");
       // account2.setFirstMajorId(1L);
        account2.setSecondMajorId(6L);
        account2.setGraduationYear(7823);
        account2.setCaseId("wedwe");
        repo4.save(account2);
        System.out.println(account2);
    }

    @Test
    void testDeleteAccount(){
        Account account3 = repo4.findById(15L).get();
        repo4.delete(account3);
    }

    /**
     * Test Methods for Profile's CRUD Operations
     */
    @Test
    void testCreateProfile(){
        Profile profile = new Profile();
        profile.setId(1L);
        profile.setFirstname("Name");
        profile.setLastname("namw");
        profile.setCaseID("1L");
        profile.setOverallRating(1.0);
        profile.setGraduationStatus(true);
        profile.setGraduationYear(2022);
        profile.setEaseOfContact(2.2);
        profile.setTimeLiness(3.3);
        profile.setContribution(4.4);
        profile.setRespectful(3.4);
        profile.setFirstMajorId(6L);
        //profile.setSecondMajorId(1.2);
        repo5.save(profile);
    }

    @Test
    void testFindProfileById(){
        Profile profile1 = repo5.findById(5L).get();
        System.out.println(profile1);
    }

    @Test
    void testUpdateProfile(){
        Profile profile2 = repo5.findById(5L).get();
        //account2.setAccountId(7823L);
        //profile2.setId(77L);
        profile2.setFirstname("Updated");
        profile2.setLastname("wdsad");
        profile2.setCaseID("88L");
        profile2.setOverallRating(7.0);
        profile2.setGraduationStatus(false);
        profile2.setGraduationYear(2077);
        profile2.setEaseOfContact(7.7);
        profile2.setTimeLiness(7.7);
        profile2.setContribution(7.7);
        profile2.setRespectful(7.7);
        profile2.setFirstMajorId(7L);
        repo5.save(profile2);

    }

    @Test
    void testDeleteProfile(){
        Profile profile3 = repo5.findById(6L).get();
        repo5.delete(profile3);
    }

    /**
     * Test Methods for Review's CRUD Operations
     */

    @Test
    void testCreateReview(){
        Review review =new Review();
        review.setAccountId(16L);
        review.setPageId(1L);
        Date firstDate = new Date(121,3,3);
//        review.setReviewDate(firstDate);
        review.setEaseOfContact(1.5);
        review.setTimeLiness(2.2);
        review.setContribution(2.3);
        review.setRespectful(2.2);
        review.setCourse("Math");
        review.setSemesterAndYear("Fall 2021");
        review.setWorkAgain(true);
        review.setGrade('A');
        review.setComments("Great");
        repo6.save(review);
    }

    @Test
    void testFindReviewById(){
        Review review1 = repo6.findById(2L).get();
        System.out.println(review1);
    }

    @Test
    void testUpdateReview(){
        Review review2 = repo6.findById(2L).get();
        review2.setAccountId(77L);
        review2.setPageId(7L);
        Date firstDate = new Date(111,1,1);
//        review2.setReviewDate(firstDate);
        review2.setEaseOfContact(7.7);
        review2.setTimeLiness(7.7);
        review2.setContribution(7.7);
        review2.setRespectful(7.7);
        review2.setCourse("CSDS133");
        review2.setSemesterAndYear("Spring2021");
        review2.setWorkAgain(false);
        review2.setGrade('B');
        review2.setComments("Bad");
        repo6.save(review2);
    }

    @Test
    void testDeleteReview(){
        Review review3 = repo6.findById(2L).get();
        repo6.delete(review3);
    }

    /**
     * Test Methods for review's negative tage's CRUD Operations
     */

    @Test
    void testCreateReviewNegativeTag(){
        ReviewNegativeTag reviewNegativeTag =new ReviewNegativeTag();
        //reviewNegativeTag.setId(2L);
        reviewNegativeTag.setNegativeTagId(1L);
        reviewNegativeTag.setReviewId(1L);
        repo7.save(reviewNegativeTag);
    }

    @Test
    void testFindReviewNegativeTagById(){
        ReviewNegativeTag reviewNegativeTag1 = repo7.findById(1L).get();
        System.out.println(reviewNegativeTag1);
    }

    @Test
    void testUpdateReviewNegativeTag(){
        ReviewNegativeTag reviewNegativeTag2 =repo7.findById(1L).get();
        //reviewNegativeTag.setId(2L);
        reviewNegativeTag2.setNegativeTagId(3L);
        reviewNegativeTag2.setReviewId(3L);
       // reviewNegativeTag2.setId(3L);
        repo7.save(reviewNegativeTag2);
    }

    @Test
    void testDeleteReviewNegativeTag(){
        ReviewNegativeTag reviewNegativeTag3 = repo7.findById(2L).get();
        repo7.delete(reviewNegativeTag3);
    }

    /**
     * Test Methods for review's positive tage's CRUD Operations
     */

    @Test
    void testCreateReviewPositiveTag(){
        ReviewPositiveTag reviewPositiveTag =new ReviewPositiveTag();
        //reviewNegativeTag.setId(2L);
        reviewPositiveTag.setPositiveTagId(1L);
        reviewPositiveTag.setReviewId(1L);
        repo8.save(reviewPositiveTag);
    }

    @Test
    void testFindReviewPositiveTagById(){
        ReviewPositiveTag reviewPositiveTag2 = repo8.findById(1L).get();
        System.out.println(reviewPositiveTag2);
    }

    @Test
    void testUpdateReviewPositiveTag(){
        ReviewPositiveTag reviewPositiveTag2 =repo8.findById(1L).get();
        //reviewNegativeTag.setId(2L);
        reviewPositiveTag2.setPositiveTagId(3L);
        reviewPositiveTag2.setReviewId(3L);
        // reviewNegativeTag2.setId(3L);
        repo8.save(reviewPositiveTag2);
    }

    @Test
    void testDeleteReviewPositiveTag(){
        ReviewPositiveTag reviewPositiveTag3 = repo8.findById(1L).get();
        repo8.delete(reviewPositiveTag3);
    }


}
