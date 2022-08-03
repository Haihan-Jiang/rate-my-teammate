package com.cwru.backend.service;

import com.cwru.backend.dal.entities.ReviewPositiveTag;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface ReviewPositiveTagService {
    ReviewPositiveTag saveReviewPositiveTag(ReviewPositiveTag reviewPositiveTag);
    ReviewPositiveTag updateReviewPositiveTag(ReviewPositiveTag reviewPositiveTag);
    void deleteReviewPositiveTag(ReviewPositiveTag reviewPositiveTag);
    ReviewPositiveTag getLocationById(Long id);
    List<ReviewPositiveTag> getAllReviewPositiveTag();
}
