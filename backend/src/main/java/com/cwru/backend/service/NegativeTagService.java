package com.cwru.backend.service;

import com.cwru.backend.dal.entities.NegativeTag;

import java.util.List;

public interface NegativeTagService {
    NegativeTag saveNegativeTag(NegativeTag negativeTag);
    NegativeTag updateNegativeTag(NegativeTag negativeTag);
    void deleteNegativeTag(NegativeTag negativeTag);
    NegativeTag getNegTagById(Long id);
    List<NegativeTag> getAllNegativeTag();
}
