package com.cwru.backend.service;

import com.cwru.backend.dal.entities.PositiveTags;
import com.cwru.backend.repositories.PositiveTagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PositiveTagServiceImpl implements PositiveTagService {
    @Autowired
    private PositiveTagRepository repository;

    @Override
    public PositiveTags savePositiveTags(PositiveTags positiveTag) {
        return repository.save(positiveTag);
    }

    @Override
    public PositiveTags updatePositiveTags(PositiveTags positiveTag) {
        return repository.save(positiveTag);
    }

    @Override
    public void deletePositiveTags(PositiveTags positiveTag) {
        repository.delete(positiveTag);
    }

    @Override
    public PositiveTags getPosTagById(Long id) {

        return repository.findById(id).get();
    }

    @Override
    public List<PositiveTags> getAllPositiveTags() {
        return repository.findAll();
    }
}
