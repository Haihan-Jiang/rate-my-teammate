package com.cwru.backend.service;

import com.cwru.backend.dal.entities.Account;

import java.util.ArrayList;
import java.util.List;

public interface AccountService {

    Account saveAccount(Account account);
    Account updateAccount(Account account);
    void deleteAccount(Account account);
    Account getAccountById(Long id);
    List<Account> getAllAccount();
    ArrayList<Long> getAllCaseId(Long accountID);
}
