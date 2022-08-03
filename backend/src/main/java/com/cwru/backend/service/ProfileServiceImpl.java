package com.cwru.backend.service;

import com.cwru.backend.dal.entities.Profile;
import com.cwru.backend.repositories.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileServiceImpl implements ProfileService{

    @Autowired
    private ProfileRepository repository;

    @Override
    public Profile saveProfile(Profile positiveTag) {
        return repository.save(positiveTag);
    }

    @Override
    public Profile updateProfile(Profile positiveTag) {
        return repository.save(positiveTag);
    }

    @Override
    public void deleteProfile(Profile positiveTag) {
        repository.delete(positiveTag);
    }

    @Override
    public Profile getProfileById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public List<Profile> getAllProfile() {
        return repository.findAll();
    }
}
