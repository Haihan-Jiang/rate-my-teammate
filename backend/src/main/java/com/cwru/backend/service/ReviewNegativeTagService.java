package com.cwru.backend.service;

import com.cwru.backend.dal.entities.ReviewNegativeTag;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface ReviewNegativeTagService {

    ReviewNegativeTag saveReviewNegativeTag(ReviewNegativeTag reviewNegativeTag);
    ReviewNegativeTag updateReviewNegativeTag(ReviewNegativeTag reviewNegativeTag);
    void deleteReviewNegativeTag(ReviewNegativeTag reviewNegativeTag);
    ReviewNegativeTag getLocationById(Long id);
    List<ReviewNegativeTag> getAllReviewNegativeTag();

}
