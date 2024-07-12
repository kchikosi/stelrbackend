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
    public String firstname,lastname, username, password, address, city, state, zip, phone;
    public Timestamp dateModified, dateCreated;
}
