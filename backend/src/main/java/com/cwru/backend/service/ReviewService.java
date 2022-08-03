package com.cwru.backend.service;

import com.cwru.backend.dal.entities.Review;

import java.util.ArrayList;
import java.util.List;

public interface ReviewService {

    Review saveReview(Review review);
    Review updateReview(Review review);
    void deleteReview(Review review);
    Review getReviewById(Long id);
    List<Review> getAllReview();
//    ArrayList<Review> getAllReviewByreviewId;

}
