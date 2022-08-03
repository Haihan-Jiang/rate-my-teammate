package com.cwru.backend.service;

import com.cwru.backend.dal.entities.ReviewPositiveTag;
import com.cwru.backend.repositories.ReviewPositiveTagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ReviewPositiveTagServiceImpl implements ReviewPositiveTagService{

    @Autowired
    private ReviewPositiveTagRepository repository;

    @Override
    public ReviewPositiveTag saveReviewPositiveTag(ReviewPositiveTag reviewPositiveTag) {
        return repository.save(reviewPositiveTag);
    }

    @Override
    public ReviewPositiveTag updateReviewPositiveTag(ReviewPositiveTag reviewPositiveTag) {
        return repository.save(reviewPositiveTag);
    }

    @Override
    public void deleteReviewPositiveTag(ReviewPositiveTag reviewPositiveTag) {
        repository.delete(reviewPositiveTag);
    }

    @Override
    public ReviewPositiveTag getLocationById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public List<ReviewPositiveTag> getAllReviewPositiveTag() {
        return repository.findAll();
    }
}
