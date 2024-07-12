package com.stelr.stelrbackend.web;

import com.stelr.stelrbackend.domain.LoginUser;
import com.stelr.stelrbackend.domain.request.SignIn;
import com.stelr.stelrbackend.domain.request.SignUp;
import com.stelr.stelrbackend.domain.response.JwtAuthenticationResponse;
import com.stelr.stelrbackend.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/auth/")
public class LoginController {

    public static final String BEARER_PREFIX = "Bearer ";
    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping(value = "signin")
    public ResponseEntity<JwtAuthenticationResponse> signin(@RequestBody SignIn request) throws Exception {
        JwtAuthenticationResponse response = authenticationService.signin(request);
        return new ResponseEntity<>(response, null, HttpStatus.OK);
    }

    @PostMapping(value = "signup")
    public ResponseEntity<JwtAuthenticationResponse> signup(@RequestBody SignUp request) throws Exception {
        JwtAuthenticationResponse response = authenticationService.signup(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
