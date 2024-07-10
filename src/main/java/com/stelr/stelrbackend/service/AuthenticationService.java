package com.stelr.stelrbackend.service;

import com.stelr.stelrbackend.domain.request.SignIn;
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

}
