package com.stelr.stelrbackend.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.sql.Timestamp;
import java.util.Collection;

@SuppressWarnings("unused")
@Data
@Builder
@Entity
@AllArgsConstructor
public class LoginUser implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long id;

    @Column(nullable = false, unique = true)
    public String username;
    @Column(nullable = false)
    public String password;
    public String role;
    @Column(nullable = false, updatable = false)
    public String email;
    @Column
    public String address;
    @Column
    public String city;
    @Column
    public String state;
    @Column
    public String zip;
    @Column
    public Timestamp dateCreate, dateModified;

    public LoginUser() {
    }


    public LoginUser(String username, String password, String role, String email, Timestamp dateCreate, Timestamp dateModified) {
        this.username = username;
        this.password = password;
        this.role = role;
        this.email = email;
        this.dateCreate = dateCreate;
        this.dateModified = dateModified;
    }

    public LoginUser(String username, String password, String role, String email, String address, String city, String state, String zip, Timestamp dateCreate, Timestamp dateModified) {
        this.username = username;
        this.password = password;
        this.role = role;
        this.email = email;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.dateCreate = dateCreate;
        this.dateModified = dateModified;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public String getUsername() {
        return null;
    }
}
