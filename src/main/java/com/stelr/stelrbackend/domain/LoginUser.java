package com.stelr.stelrbackend.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.sql.Timestamp;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

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
    public Timestamp dateCreated, dateModified;

    @ElementCollection(fetch = FetchType.EAGER)
    public List<String> roles;

    public LoginUser() {
    }


    public LoginUser(String username, String password, String email, String address, String city, String state, String zip, Timestamp dateCreated, Timestamp dateModified, List<String> roles) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.dateCreated = dateCreated;
        this.dateModified = dateModified;
        this.roles = roles;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList());
    }

    @Override
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
