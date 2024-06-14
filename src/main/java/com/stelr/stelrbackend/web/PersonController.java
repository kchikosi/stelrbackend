package com.stelr.stelrbackend.web;

import com.stelr.stelrbackend.domain.Person;
import com.stelr.stelrbackend.domain.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonController {
    @Autowired
    private PersonRepository repository;
    @GetMapping("/persons")
    public Iterable<Person> getPersons() {
        return repository.findAll();
    }
}
