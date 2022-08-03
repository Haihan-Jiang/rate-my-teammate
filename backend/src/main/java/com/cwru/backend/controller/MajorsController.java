package com.cwru.backend.controller;

import com.cwru.backend.dal.entities.Majors;
import com.cwru.backend.service.MajorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Majors")
@CrossOrigin(origins = "*", maxAge = 3600)
public class MajorsController {

    @Autowired
    private MajorService majorService;

    @PostMapping("/add")
    public String add(@RequestBody Majors major) {
        majorService.saveMajor(major);
        return "new major is added";
    }

     @GetMapping("/get")
     public Majors getMajorById(@RequestParam(name="id", required = false) Long id){
     return majorService.getMajorById(id);
     }

    @GetMapping("/getAll")
    public List<Majors> getAllMajor() {
        return majorService.getAllMajor();
    }

    // @DeleteMapping
    // public void deleteMajor(){
    //
    // }

}
