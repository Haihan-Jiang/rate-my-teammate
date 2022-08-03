package com.cwru.backend.repositories;

import com.cwru.backend.dal.entities.NegativeTag;
import com.cwru.backend.dal.entities.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface NegativeTagRepository extends JpaRepository<NegativeTag,Long> {

}
