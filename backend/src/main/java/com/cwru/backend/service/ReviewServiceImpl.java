package com.cwru.backend.service;

import com.cwru.backend.dal.entities.Review;
import com.cwru.backend.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService{

    @Autowired
    private ReviewRepository repository;

    @Override
    public Review saveReview(Review review) {
        return repository.save(review);
    }

    @Override
    public Review updateReview(Review review) {
        return repository.save(review);
    }

    @Override
    public void deleteReview(Review review) {
       repository.delete(review);
    }

    @Override
    public Review getReviewById(Long id) {
        return repository.getById(id);
    }

//    @Override
//    public ArrayList<Review> getAllReviewByreviewId(Long reviewId){
//        return repository.queryAllReviews(reviewId);
//    }

    @Override
    public List<Review> getAllReview() {
        return repository.findAll();
    }
}
