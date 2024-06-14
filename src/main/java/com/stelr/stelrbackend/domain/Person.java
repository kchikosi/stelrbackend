package com.stelr.stelrbackend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
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
    private String firstName, lastName, initial, email, phone, password;

    private Timestamp dateCreated;

    private Timestamp dateModified;

    @OneToOne
    @JoinColumn(name = "accountId")
    private Account account;

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

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }
}
