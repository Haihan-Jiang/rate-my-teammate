package com.cwru.backend.repositories;

import com.cwru.backend.dal.entities.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<Account,Long> {

    @Query("SELECT a.caseId FROM Account a WHERE a.accountId = ?1")
    ArrayList<Long> queryForCaseId(Long accountId);

}
