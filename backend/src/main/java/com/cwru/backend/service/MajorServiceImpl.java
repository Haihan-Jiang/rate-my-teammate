package com.cwru.backend.service;

import com.cwru.backend.dal.entities.Majors;
import com.cwru.backend.repositories.MajorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MajorServiceImpl implements MajorService{

    @Autowired
    private MajorRepository repository;

    @Override
    public Majors saveMajor(Majors major) {
        return repository.save(major);
    }

    @Override
    public Majors updateMajor(Majors major) {
        return repository.save(major);
    }

    @Override
    public void deleteMajor(Majors major) {
        repository.delete(major);
    }

    @Override
    public Majors getMajorById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public List<Majors> getAllMajor() {
        return repository.findAll();
    }
}
