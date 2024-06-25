package com.stelr.stelrbackend.web;

import com.stelr.stelrbackend.domain.request.SignIn;
import com.stelr.stelrbackend.domain.response.JwtAuthenticationResponse;
import com.stelr.stelrbackend.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/login")
public class LoginController {

    public static final String BEARER_PREFIX = "Bearer ";
    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping(value = "signin")
    public ResponseEntity<JwtAuthenticationResponse> signin(@RequestBody SignIn request) throws Exception {
        JwtAuthenticationResponse response = authenticationService.signin(request);
        return ResponseEntity.ok()
                .header(HttpHeaders.AUTHORIZATION, BEARER_PREFIX + response.getToken())
                .header(HttpHeaders.ACCESS_CONTROL_EXPOSE_HEADERS, "Authorization")
                .build();
    }
}
