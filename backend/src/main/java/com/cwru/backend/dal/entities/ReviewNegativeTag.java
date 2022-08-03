package com.cwru.backend.dal.entities;

import javax.persistence.*;

@Entity
@Table(name = "Review_Neg_Tag")
public class ReviewNegativeTag {
    @Id
    @Column(name="review_neg_tag_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="neg_tag_id")
    private Long negativeTagId;

    @Column(name="review_id")
    private Long reviewId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getNegativeTagId() {
        return negativeTagId;
    }

    public void setNegativeTagId(Long negativeTagId) {
        this.negativeTagId = negativeTagId;
    }

    public Long getReviewId() {
        return reviewId;
    }

    public void setReviewId(Long reviewId) {
        this.reviewId = reviewId;
    }

    @Override
    public String toString() {
        return "ReviewNegativeTag{" +
                "id=" + id +
                ", negativeTagId=" + negativeTagId +
                ", reviewId=" + reviewId +
                '}';
    }
}
