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

public class AccountType {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long accountTypeId;

    private String accountType, description;
    private Timestamp dateCreated, dateModified;

    public AccountType(String accountType, String description, Timestamp dateCreated, Timestamp dateModified) {
        this.accountType = accountType;
        this.description = description;
        this.dateCreated = dateCreated;
        this.dateModified = dateModified;
    }
}
