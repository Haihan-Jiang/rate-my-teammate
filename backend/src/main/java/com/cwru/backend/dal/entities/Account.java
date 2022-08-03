package com.cwru.backend.dal.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity(name = "Account")
@Table(name="Account")
public class Account implements Serializable {

    @Id
    @Column(name="account_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long accountId;

    @Column(name="CASE_ID")
    private String caseId;

    private String lastname;

    private String firstname;


    private String password;

    @Column(name="FIRST_MAJOR_ID")
    private Long firstMajorId;

    @Column(name="SECOND_MAJOR_ID")
    private Long secondMajorId;

    @Column(name="GRADUATION_YEAR")
    private Integer graduationYear;

//    @OneToMany(cascade=CascadeType.ALL)
//    @JoinColumn(name ="major_id", referencedColumnName = "FIRST_MAJOR_ID",insertable=false, updatable=false)
//    private List<Majors> majors;
//    //@JoinColumn(name="major_id")
//
//    @OneToMany(cascade=CascadeType.ALL)
//    @JoinColumn(name ="major_id", referencedColumnName = "SECOND_MAJOR_ID",insertable=false, updatable=false)
//    private List<Majors> majors1;


    @Override
    public String toString() {
        return "Account{" +
                "accountId=" + accountId +
                ", caseId='" + caseId + '\'' +
                ", lastname='" + lastname + '\'' +
                ", firstname='" + firstname + '\'' +
                ", password=" + password +
                ", firstMajorId=" + firstMajorId +
                ", secondMajorId=" + secondMajorId +
                ", graduationYear=" + graduationYear +
                '}';
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long accountId) {
        this.accountId = accountId;
    }

    public String getCaseId() {
        return caseId;
    }

    public void setCaseId(String caseId) {
        this.caseId = caseId;
    }



    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getFirstMajorId() {
        return firstMajorId;
    }

    public void setFirstMajorId(Long firstMajorId) {
        this.firstMajorId = firstMajorId;
    }

    public Long getSecondMajorId() {
        return secondMajorId;
    }

    public void setSecondMajorId(Long secondMajorId) {
        this.secondMajorId = secondMajorId;
    }

    public Integer getGraduationYear() {
        return graduationYear;
    }

    public void setGraduationYear(Integer graduationYear) {
        this.graduationYear = graduationYear;
    }



}
