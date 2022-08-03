package com.cwru.backend.dal.entities;

import javax.persistence.*;

import javax.persistence.ManyToOne;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="Majors")
public class Majors {

    @Id
    @Column(name="major_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "major")
    private String major;

//    @ManyToOne(cascade=CascadeType.ALL)
//    @JoinColumn(name ="major_id", referencedColumnName = "FIRST_MAJOR_ID",insertable=false, updatable=false,nullable = true)
//    private Account account1;
//
//    @ManyToOne(cascade=CascadeType.ALL)
//    @JoinColumn(name ="major_id", referencedColumnName = "SECOND_MAJOR_ID",insertable=false, updatable=false,nullable = true)
//    private Account account2;

    @Override
    public String toString() {
        return "Majors{" +
                "id=" + id +
                ", Major='" + major + '\'' +
                '}';
    }

    public  long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }


}
