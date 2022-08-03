package com.cwru.backend.dal.entities;

import javax.persistence.*;

@Entity
@Table(name="Pos_Tag")
public class PositiveTags {
    @Id
    @Column(name="pos_tag_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
//    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name="pos_tag")
    private String positiveTag;

    @Override
    public String toString() {
        return "PositiveTags{" +
                "id=" + id +
                ", positiveTag='" + positiveTag + '\'' +
                '}';
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPositiveTag() {
        return positiveTag;
    }

    public void setPositiveTag(String positiveTag) {
        this.positiveTag = positiveTag;
    }
}
