package com.stelr.stelrbackend.service;

import com.stelr.stelrbackend.domain.LoginUser;
import com.stelr.stelrbackend.domain.Person;
import com.stelr.stelrbackend.domain.PersonRepository;
import com.stelr.stelrbackend.domain.request.SignIn;
import com.stelr.stelrbackend.domain.request.SignUp;
import com.stelr.stelrbackend.domain.response.JwtAuthenticationResponse;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    public String token;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private UserDetailsServiceImpl userDetailsService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private PersonRepository personRepository;

    public JwtAuthenticationResponse signin(SignIn request) {
        final Logger logger = LoggerFactory.getLogger(JwtAuthenticationResponse.class);
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.username, request.password));
        UserDetails userDetails = null;
        try {
            userDetails = userDetailsService.loadUserByUsername(request.username);
        } catch (AuthenticationException e) {
            logger.error(e.getMessage());
        }
        String jwt = null;
        if (userDetails != null) {
            jwt = jwtService.generateToken(userDetails);
        }
        return JwtAuthenticationResponse.builder()
                .token(jwt)
                .username(userDetails.getUsername())
                .password(userDetails.getPassword())
                .build();
    }

    public JwtAuthenticationResponse signup(SignUp request) {
        //check if user exists before adding
        if(personRepository.findByEmail(request.username).isPresent()) {
            return JwtAuthenticationResponse.builder()
                    .message("user exists").build();
        };
        Person person = new Person(request.firstname,request.lastname, null,request.username, request.phone, request.password, Timestamp.valueOf(LocalDateTime.now()),Timestamp.valueOf(LocalDateTime.now()));
        personRepository.save(person);
        LoginUser loginUser = new LoginUser(request.username, request.password, List.of("USER"), request.username, Timestamp.valueOf(LocalDateTime.now()), Timestamp.valueOf(LocalDateTime.now()));
        userDetailsService.encryptAndSavePassword(loginUser);
        String jwt = jwtService.generateToken(loginUser);
        return JwtAuthenticationResponse.builder()
                .token(jwt).build();
    }

}
