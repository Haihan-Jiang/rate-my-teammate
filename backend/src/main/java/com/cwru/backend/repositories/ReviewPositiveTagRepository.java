package com.cwru.backend.repositories;

import com.cwru.backend.dal.entities.ReviewNegativeTag;
import com.cwru.backend.dal.entities.ReviewPositiveTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface ReviewPositiveTagRepository extends JpaRepository<ReviewPositiveTag, Long> {
    @Query("SELECT a FROM ReviewPositiveTag a WHERE a.reviewId = ?1")
    ArrayList<ReviewPositiveTag> queryReviewPositiveTagByReviewId(Long reviewId);
}
