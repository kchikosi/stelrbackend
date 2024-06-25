package com.stelr.stelrbackend.domain.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SignUp {
    public String address, city, email, password, role, state, zip, username;
    public Timestamp dateModified, dateCreated;
}
