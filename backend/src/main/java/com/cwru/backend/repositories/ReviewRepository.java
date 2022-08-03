package com.cwru.backend.repositories;

import com.cwru.backend.dal.entities.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    @Query("SELECT a FROM Review a WHERE a.pageId = ?1 and a.accountId = ?2")
    ArrayList<Review> queryReviewByPageIDandAccountID(Long pageId, Long accountId);

    @Query("SELECT a FROM Review a WHERE a.pageId = ?1")
    ArrayList<Review> queryReviewByPageID(Long pageId);

    @Query("SELECT a FROM Review a WHERE a.id= ?1")
    ArrayList<Review> queryAllReviews(Long reviewID);
}
