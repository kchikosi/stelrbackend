package com.stelr.stelrbackend.web;

public class PersonNotFoundException extends RuntimeException {
    public PersonNotFoundException(long id) {
        super("Person with id [" + id + "] not found");
    }
}
