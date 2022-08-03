package com.cwru.backend.repositories;

import com.cwru.backend.dal.entities.Profile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;


public interface ProfileRepository extends JpaRepository<Profile,Long> {
    @Query("SELECT a FROM Profile a WHERE a.caseID = ?1")
    ArrayList<Profile> queryProfileByCaseId(String caseId);

    @Query("SELECT a FROM Profile a WHERE a.firstname = ?1")
    ArrayList<Profile> queryProfileByFirstName(String firstName);

    @Query("SELECT a FROM Profile a WHERE a.lastname = ?1")
    ArrayList<Profile> queryProfileByLastName(String lastName);

    @Query("SELECT a FROM Profile a WHERE a.lastname = ?1 and a.firstname = ?2")
    ArrayList<Profile> queryProfileByFullName(String lastname,String firstname);

    @Query("SELECT a FROM Profile a where a.firstMajorId =?1 or a.secondMajorId =?1")
    ArrayList<Profile> queryProfileByMajorId( Long majorId);
}
