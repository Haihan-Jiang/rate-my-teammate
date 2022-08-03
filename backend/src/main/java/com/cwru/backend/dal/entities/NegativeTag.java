package com.cwru.backend.dal.entities;

import javax.persistence.*;

@Entity
@Table(name="Neg_Tag")
public class NegativeTag {

    @Id
    @Column(name="neg_tag_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="neg_tag")
    private String negativeTag;

    @Override
    public String toString() {
        return "NegativeTag{" +
                "id=" + id +
                ", negativeTag='" + negativeTag + '\'' +
                '}';
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNegativeTag() {
        return negativeTag;
    }

    public void setNegativeTag(String negativeTag) {
        this.negativeTag = negativeTag;
    }

}
