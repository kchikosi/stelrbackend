package com.stelr.stelrbackend.web;

import com.stelr.stelrbackend.domain.Person;
import com.stelr.stelrbackend.domain.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Optional;

@RestController
public class PersonController {
    @Autowired
    private PersonRepository repository;

    @GetMapping("/persons")
    public ResponseEntity<Person> getAll() {
        return new ResponseEntity(repository.findAll(), null, HttpStatus.OK);
    }

    @GetMapping(value = "/persons/{id}")
    public ResponseEntity get(@PathVariable("id") long id) {
        return new ResponseEntity(repository.findById(id).orElseThrow(() -> new PersonNotFoundException(id)), null, HttpStatus.OK);
    }

    @PostMapping("/persons")
    public ResponseEntity save(@RequestBody Person person) {
        return new ResponseEntity<>(repository.save(person), null, HttpStatus.CREATED);
    }

    @PutMapping("/persons/{id}")
    public ResponseEntity update(@PathVariable("id") long id, @RequestBody Person person) {
        Optional<Person> personFromDb = Optional.ofNullable(repository.findById(id).orElseThrow(() -> new PersonNotFoundException(id)));
        Timestamp dateModified = Timestamp.valueOf(LocalDateTime.now());
        repository.updateByPersonId(personFromDb.get().account, dateModified, person.email, person.firstName, person.initial, person.lastName, person.password, person.phone, personFromDb.get().personId);
        return new ResponseEntity(HttpStatus.OK);
    }
}
