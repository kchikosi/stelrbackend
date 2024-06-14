package com.stelr.stelrbackend.web;

import com.stelr.stelrbackend.domain.Person;
import com.stelr.stelrbackend.domain.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@RestController
public class PersonController {
    @Autowired
    private PersonRepository repository;

    @GetMapping("/persons")
    public ResponseEntity<Person> getPersons() {
        return new ResponseEntity(repository.findAll(), null, HttpStatus.OK);
    }

    @GetMapping(value = "/persons/{id}")
    public ResponseEntity get(@PathVariable("id") long id) {
        return new ResponseEntity(repository.findById(id), null, HttpStatus.OK);
    }

    @PostMapping("/persons")
    public ResponseEntity save(@RequestBody Person person) {
        return new ResponseEntity<>(repository.save(person), null, HttpStatus.CREATED);
    }

    @PutMapping("/persons/{id}")
    @Modifying
    public ResponseEntity update(@PathVariable("id") long id, @RequestBody Person person) {
        Person personFromDb = repository.findById(id).orElseThrow(() -> new PersonNotFoundException(id));
        personFromDb.firstName = person.firstName;
        personFromDb.lastName = person.lastName;
        personFromDb.initial = person.initial;
        personFromDb.email = person.email;
        personFromDb.phone = person.phone;
        personFromDb.password = person.password;
        personFromDb.dateModified = Timestamp.valueOf(LocalDateTime.now());
        return new ResponseEntity<>(repository.save(personFromDb), null, HttpStatus.OK);
    }
}
