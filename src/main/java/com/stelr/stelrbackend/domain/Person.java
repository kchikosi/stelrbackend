package com.stelr.stelrbackend.domain;

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
    public String firstName, lastName, initial, email, phone;
    public Timestamp dateCreated, dateModified;
    @OneToOne
    @JoinColumn(name = "accountId")
    public Account account;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long personId;

    public Person(String firstName, String lastName, String initial, String email, String phone, Timestamp dateCreated, Timestamp dateModified) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.initial = initial;
        this.email = email;
        this.phone = phone;
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
