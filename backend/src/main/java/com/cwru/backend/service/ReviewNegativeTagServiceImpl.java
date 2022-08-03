package com.cwru.backend.service;

import com.cwru.backend.dal.entities.ReviewNegativeTag;
import com.cwru.backend.repositories.ReviewNegativeTagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewNegativeTagServiceImpl implements ReviewNegativeTagService {

    @Autowired
    private ReviewNegativeTagRepository repository;

    @Override
    public ReviewNegativeTag saveReviewNegativeTag(ReviewNegativeTag reviewNegativeTag) {
        return repository.save(reviewNegativeTag);
    }

    @Override
    public ReviewNegativeTag updateReviewNegativeTag(ReviewNegativeTag reviewNegativeTag) {
        return repository.save(reviewNegativeTag);
    }

    @Override
    public void deleteReviewNegativeTag(ReviewNegativeTag reviewNegativeTag) {
        repository.delete(reviewNegativeTag);
    }

    @Override
    public ReviewNegativeTag getLocationById(Long id) {
        return repository.getById(id);
    }

    @Override
    public List<ReviewNegativeTag> getAllReviewNegativeTag() {
        return repository.findAll();
    }

}
