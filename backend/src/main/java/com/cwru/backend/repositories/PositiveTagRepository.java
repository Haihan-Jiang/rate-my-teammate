package com.cwru.backend.repositories;

import com.cwru.backend.dal.entities.PositiveTags;
import com.cwru.backend.dal.entities.Review;
import com.cwru.backend.dal.entities.ReviewNegativeTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface PositiveTagRepository extends JpaRepository<PositiveTags,Long> {

}
