package com.cwru.backend.service;

import com.cwru.backend.dal.entities.Profile;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface ProfileService {
    Profile saveProfile(Profile positiveTag);
    Profile updateProfile(Profile positiveTag);
    void deleteProfile(Profile positiveTag);
    Profile getProfileById(Long id);
    List<Profile> getAllProfile();
}
