package com.cwru.backend.service;


import com.cwru.backend.dal.entities.Majors;

import java.util.List;

public interface MajorService {
    Majors saveMajor(Majors major);
    Majors updateMajor(Majors major);
    void deleteMajor(Majors major);
    Majors getMajorById(Long id);
    List<Majors> getAllMajor();
}
