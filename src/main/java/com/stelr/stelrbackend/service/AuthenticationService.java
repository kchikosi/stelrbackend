package com.stelr.stelrbackend.service;

import com.stelr.stelrbackend.domain.request.SignIn;
import com.stelr.stelrbackend.domain.response.JwtAuthenticationResponse;
import lombok.RequiredArgsConstructor;
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

    public JwtAuthenticationResponse signin(SignIn request) throws Exception {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.username, request.password));
        UserDetails userDetails = null;
        try {
            userDetails = userDetailsService.loadUserByUsername(request.username);
        } catch (AuthenticationException e) {
            e.printStackTrace();
        }
        String jwt = jwtService.generateToken(userDetails);
        return JwtAuthenticationResponse.builder().token(jwt).build();
    }

}
