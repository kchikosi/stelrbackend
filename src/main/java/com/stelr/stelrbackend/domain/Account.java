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
public class Account {
    public Timestamp dateModified;
    public Timestamp dateCreated;
    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "accountTypeId")
    public AccountType accountType;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long accountId;

    public Account(Timestamp dateCreated, Timestamp dateModified) {
        this.dateCreated = dateCreated;
        this.dateModified = dateModified;
    }

    public AccountType getAccountType() {
        return accountType;
    }

    public void setAccountType(AccountType accountType) {
        this.accountType = accountType;
    }
}
