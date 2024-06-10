package com.stelr.stelrbackend.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long personId;
    private long accountId;
    private String firstName, lastName, initial, email, phone, password;

    private Timestamp dateCreated;

    private Timestamp dateModified;

    public Person(String firstName, String lastName, String initial, String email, String phone, String password, Timestamp dateCreated, Timestamp dateModified) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.initial = initial;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.dateCreated = dateCreated;
        this.dateModified = dateModified;
    }
}
