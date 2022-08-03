package com.cwru.backend.controller;

import com.cwru.backend.dal.entities.Account;
import com.cwru.backend.dal.entities.Profile;
import com.cwru.backend.service.AccountService;
import com.cwru.backend.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
@CrossOrigin(origins = "*", maxAge = 3600)
//@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/Account")
public class AccountController {
    @Autowired
    private AccountService accountService;

    @Autowired
    private ProfileService profileService;

    public Profile getProfile(String caseID) {
        List<Profile> profileList = profileService.getAllProfile();
        Profile profile = null;
        for (int i = 0; i < profileList.size(); i++) {
            if (profileList.get(i).getCaseID().equals(caseID)) {
                profile = profileList.get(i);
            }
        }
        return profile;
    }

    public ArrayList<String> getAllAccCaseId() {
        List<Account> accountList = accountService.getAllAccount();
        ArrayList<String> caseIdList = new ArrayList<String>();
        for(int i=0;i<accountList.size();i++){
            caseIdList.add(i,accountList.get(i).getCaseId());
        }
        return caseIdList;
    }


    @PostMapping(value = "/signup", produces = { "application/json" })
    public ArrayList<Integer> signUp(@RequestBody Account account) {
        ArrayList<String> accCaseIdList = getAllAccCaseId();
        String caseId = account.getCaseId();
        String firstName = account.getFirstname();
        String lastName = account.getLastname();
        Integer graduationYear = account.getGraduationYear();
        Long firstMajorId = account.getFirstMajorId();
        Long secondMajorId = account.getSecondMajorId();
        ArrayList<Integer> accountIDList = new ArrayList<Integer>();
        //If exists,register failure.
        if(accCaseIdList.contains(caseId)){
            accountIDList.add(-1);
        }
        //If it does not exist, save the information.
        else {
            accountService.saveAccount(account);
            accountIDList.add((int) (long) account.getAccountId());
            Profile profile = getProfile(caseId);
            if (profile != null) {
                autoUpdateProfile(profile, firstName, lastName, caseId, graduationYear, firstMajorId, secondMajorId);
            } else {
                autoSaveProfile(firstName, lastName, caseId, graduationYear, firstMajorId, secondMajorId);
            }
        }
        return accountIDList;
    }

    @PostMapping(value = "/login", produces={ "application/json" })
    public ArrayList<Integer> login(@RequestBody Account account){
        Long tempAccountID = -1L;
        String truePassword ="";
        String accountPassword = account.getPassword();
        // method for getting All caseId;
        ArrayList<String> caseIdList = getAllAccCaseId();
        String caseId = account.getCaseId();
        String firstName =account.getFirstname();
        String lastName =account.getLastname();
        Integer graduationYear = account.getGraduationYear();
        Long firstMajorId = account.getFirstMajorId();
        Long secondMajorId = account.getSecondMajorId();

        List<Account> accountList = accountService.getAllAccount();
        ArrayList<Integer> accountIDList = new ArrayList<Integer>();
        for(int i=0;i<accountList.size();i++){
            if (accountList.get(i).getCaseId().equals(caseId)){
                tempAccountID = accountList.get(i).getAccountId();
                truePassword = accountList.get(i).getPassword();
                break;
            }
            else
                truePassword = "-1L";
        }
        // If exists and matches,success.
        if (caseIdList.contains(caseId) && (truePassword.equals(accountPassword))) {
            accountIDList.add((int) (long) tempAccountID);
        }
        //If it does not match, failed.
        else {
            accountIDList.add(-1);
        }
        return accountIDList;
    }

    public void autoSaveProfile(String firstName,String lastName, String caseId, Integer graduationYear,Long firstMajorId, Long secondMajorId){
        Profile autoProfile = new Profile();
        autoProfile.setFirstname(firstName);
        autoProfile.setLastname(lastName);
        autoProfile.setCaseID(caseId);
        autoProfile.setGraduationYear(graduationYear);
        autoProfile.setFirstMajorId(firstMajorId);
        autoProfile.setSecondMajorId(secondMajorId);
        profileService.saveProfile(autoProfile);
    }


    public void autoUpdateProfile(Profile profile, String firstName, String lastName, String caseId,
                                  Integer graduationYear, Long firstMajorId, Long secondMajorId) {
        profile.setFirstname(firstName);
        profile.setLastname(lastName);
        profile.setCaseID(caseId);
        profile.setGraduationYear(graduationYear);
        profile.setFirstMajorId(firstMajorId);
        profile.setSecondMajorId(secondMajorId);
        profileService.updateProfile(profile);
    }
}
