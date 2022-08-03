package com.cwru.backend.repositories;

import com.cwru.backend.dal.entities.Majors;
import com.cwru.backend.dal.entities.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface MajorRepository extends JpaRepository<Majors,Long> {

//    @Query("SELECT a FROM Majors a WHERE INSTR(a.major,'?1'))
//    ArrayList<Profile> queryProfileByFullName(String lastname, String firstname);
//
//    SELECT * FROM employee_name_details WHERE INSTR(emp_lastName , 'ill') > 0

    @Query("Select c.id  from Majors c where c.major = ?1")
    Long queryMajorIdByMajors(String firstMajor);



}
