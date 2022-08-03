package com.cwru.backend.dal.entities;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;

@Entity
@Table(name = "Review")
public class Review {
    @Id
    @Column(name="review_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="account_id")
    private Long accountId;

    @Column(name = "page_id")
    private Long pageId;
    
    @Column(name = "review_date")
    private Date reviewDate;

    @Column(name = "ease_of_contact")
    private Double easeOfContact;

    @Column(name = "timeliness")
    private Double timeLiness;

    @Column(name = "contributions")
    private Double contribution;

    @Column(name="respectful")
    private Double respectful;

    @Column(name="course")
    private String course;

    @Column(name="year_semester")
    private String semesterAndYear;

    @Column(name="work_again")
    private Boolean workAgain;

    @Column(name="grade")
    private Character grade;

    @Column(name="comments")
    private String comments;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long accountId) {
        this.accountId = accountId;
    }

    public Long getPageId() {
        return pageId;
    }

    public void setPageId(Long pageId) {
        this.pageId = pageId;
    }

   public Date getReviewDate() {
       return reviewDate;
   }

   public void setReviewDate(Date reviewDate) {
       this.reviewDate = reviewDate;
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

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String getSemesterAndYear() {
        return semesterAndYear;
    }

    public void setSemesterAndYear(String semesterAndYear) {
        this.semesterAndYear = semesterAndYear;
    }

    public Boolean getWorkAgain() {
        return workAgain;
    }

    public void setWorkAgain(Boolean workAgain) {
        this.workAgain = workAgain;
    }

    public Character getGrade() {
        return grade;
    }

    public void setGrade(Character grade) {
        this.grade = grade;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    @Override
    public String toString() {
        return "Review{" +
                "id=" + id +
                ", accountId=" + accountId +
                ", pageId=" + pageId +
                ", easeOfContact=" + easeOfContact +
                ", timeLiness=" + timeLiness +
                ", contribution=" + contribution +
                ", respectful=" + respectful +
                ", course='" + course + '\'' +
                ", semesterAndYear='" + semesterAndYear + '\'' +
                ", workAgain=" + workAgain +
                ", grade=" + grade +
                ", comments='" + comments + '\'' +
                '}';
    }
}
