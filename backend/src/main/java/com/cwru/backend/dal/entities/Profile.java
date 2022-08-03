package com.cwru.backend.dal.entities;

import javax.persistence.*;

@Entity
@Table(name = "Profile")
public class Profile {

    @Id
    @Column(name="PAGE_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String lastname;

    private String firstname;

    @Column(name = "CASE_ID")
    private String caseID;

    @Column(name = "OVERALL_RATING")
    private Double overallRating;

    @Column(name = "GRADUATION_STATUS")
    private Boolean graduationStatus;

    @Column(name = "GRADUATION_YEAR")
    private Integer graduationYear;

    @Column(name = "EASE_OF_CONTACT")
    private Double easeOfContact;

    @Column(name = "TIMELINESS")
    private Double timeLiness;

    @Column(name = "CONTRIBUTIONS")
    private Double contribution;

    @Column(name = "RESPECTFUL")
    private Double respectful;

    @Column(name = " FIRST_MAJOR_ID")
    private Long firstMajorId;

    @Column(name = "SECOND_MAJOR_ID")
    private Long secondMajorId;

    public long getId() {
        return id;
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

    public void setId(long id) {
        this.id = id;
    }


    public String getCaseID() {
        return caseID;
    }

    public void setCaseID(String caseID) {
        this.caseID = caseID;
    }

    public Double getOverallRating() {
        return overallRating;
    }

    public void setOverallRating(Double overallRating) {
        this.overallRating = overallRating;
    }

    public Boolean getGraduationStatus() {
        return graduationStatus;
    }

    public void setGraduationStatus(Boolean graduationStatus) {
        this.graduationStatus = graduationStatus;
    }

    public Integer getGraduationYear() {
        return graduationYear;
    }

    public void setGraduationYear(Integer graduationYear) {
        this.graduationYear = graduationYear;
    }

    public Double getEaseOfContact() {
        return easeOfContact;
    }

    public void setEaseOfContact(Double easeOfContact) {
        this.easeOfContact = easeOfContact;
    }

    public Double getTimeLiness() {
        return timeLiness;
    }

    public void setTimeLiness(Double timeLiness) {
        this.timeLiness = timeLiness;
    }

    public Double getContribution() {
        return contribution;
    }

    public void setContribution(Double contribution) {
        this.contribution = contribution;
    }

    public Double getRespectful() {
        return respectful;
    }

    public void setRespectful(Double respectful) {
        this.respectful = respectful;
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

    @Override
    public String toString() {
        return "Profile{" +
                "id=" + id +
                ", lastname='" + lastname + '\'' +
                ", firstname='" + firstname + '\'' +
                ", caseID=" + caseID +
                ", overallRating=" + overallRating +
                ", graduationStatus=" + graduationStatus +
                ", graduationYear=" + graduationYear +
                ", easeOfContact=" + easeOfContact +
                ", timeLiness=" + timeLiness +
                ", contribution=" + contribution +
                ", respectful=" + respectful +
                ", firstMajorId=" + firstMajorId +
                ", secondMajorId=" + secondMajorId +
                '}';
    }
}
