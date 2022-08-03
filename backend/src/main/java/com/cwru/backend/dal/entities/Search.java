package com.cwru.backend.dal.entities;

public class Search {
    private Majors majors;
    private Profile profile;

    public Majors getMajors() {
        return majors;
    }

    public void setMajors(Majors majors) {
        this.majors = majors;
    }

    public Profile getProfile() {
        return profile;
    }

    public void setProfile(Profile profile) {
        this.profile = profile;
    }

}
