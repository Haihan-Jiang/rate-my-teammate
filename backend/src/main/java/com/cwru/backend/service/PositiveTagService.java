package com.cwru.backend.service;

import com.cwru.backend.dal.entities.PositiveTags;

import java.util.List;

public interface PositiveTagService {
    PositiveTags savePositiveTags(PositiveTags positiveTag);
    PositiveTags updatePositiveTags(PositiveTags positiveTag);
    void deletePositiveTags(PositiveTags positiveTag);
    PositiveTags getPosTagById(Long id);
    List<PositiveTags> getAllPositiveTags();
}
