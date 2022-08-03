package com.cwru.backend.service;

import com.cwru.backend.dal.entities.NegativeTag;
import com.cwru.backend.repositories.NegativeTagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NegativeTagServiceImpl implements NegativeTagService{

    @Autowired
    private NegativeTagRepository repository;

    @Override
    public NegativeTag saveNegativeTag(NegativeTag negativeTag) {
        return repository.save(negativeTag);
    }

    @Override
    public NegativeTag updateNegativeTag(NegativeTag negativeTag) {
        return repository.save(negativeTag);
    }

    @Override
    public void deleteNegativeTag(NegativeTag negativeTag) {
        repository.delete(negativeTag);
    }

    @Override
    public NegativeTag getNegTagById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public List<NegativeTag> getAllNegativeTag() {
        return repository.findAll();
    }
}
