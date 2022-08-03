package com.cwru.backend.service;

import com.cwru.backend.dal.entities.Account;
import com.cwru.backend.repositories.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class AccountServiceImpl implements AccountService  {

    @Autowired
    private AccountRepository repository;

    @Override
    public Account saveAccount(Account account) {
        return repository.save(account);
    }

    @Override
    public Account updateAccount(Account account) {
        return repository.save(account);
    }

    @Override
    public void deleteAccount(Account account) {
        repository.delete(account);
    }

    @Override
    public Account getAccountById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public List<Account> getAllAccount() {
        return repository.findAll();
    }

    @Override
    public ArrayList<Long> getAllCaseId(Long accountID){return repository.queryForCaseId(accountID);}
}
