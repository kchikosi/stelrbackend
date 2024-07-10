package com.stelr.stelrbackend.domain.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class JwtAuthenticationResponse {
    public String token;
    public String username;
    public String password;

}
