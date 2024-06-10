package com.stelr.stelrbackend.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.sql.Timestamp;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long accountId;

    private long personId, accountTypeId;

    private Timestamp dateCreated, dateModified;

    public Account(long personId, long accountTypeId, Timestamp dateCreated, Timestamp dateModified) {
        this.personId = personId;
        this.accountTypeId = accountTypeId;
        this.dateCreated = dateCreated;
        this.dateModified = dateModified;
    }
}
