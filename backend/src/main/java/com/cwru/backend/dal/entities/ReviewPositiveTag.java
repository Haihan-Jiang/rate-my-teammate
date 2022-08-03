package com.cwru.backend.dal.entities;

import javax.persistence.*;

@Entity
@Table(name = "Review_Pos_Tag")
public class ReviewPositiveTag {
    @Id
    @Column(name="review_pos_tag_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="pos_tag_id")
    private Long positiveTagId;

    @Column(name="review_id")
    private Long reviewId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPositiveTagId() {
        return positiveTagId;
    }

    public void setPositiveTagId(Long positiveTagId) {
        this.positiveTagId = positiveTagId;
    }

    public Long getReviewId() {
        return reviewId;
    }

    public void setReviewId(Long reviewId) {
        this.reviewId = reviewId;
    }

    @Override
    public String toString() {
        return "ReviewPositiveTag{" +
                "id=" + id +
                ", positiveTagId=" + positiveTagId +
                ", reviewId=" + reviewId +
                '}';
    }
}
