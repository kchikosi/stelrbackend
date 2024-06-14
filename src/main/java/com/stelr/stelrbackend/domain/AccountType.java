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

public class AccountType {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long accountTypeId;

    private String accountType, description;
    private Timestamp dateCreated, dateModified;

    @OneToOne
    @JoinColumn(name = "accountTypeId")
    private Account account;

    public AccountType(String accountType, String description, Timestamp dateCreated, Timestamp dateModified) {
        this.accountType = accountType;
        this.description = description;
        this.dateCreated = dateCreated;
        this.dateModified = dateModified;
    }
}
