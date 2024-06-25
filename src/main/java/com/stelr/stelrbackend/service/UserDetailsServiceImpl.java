package com.stelr.stelrbackend.service;

import com.stelr.stelrbackend.domain.LoginUser;
import com.stelr.stelrbackend.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.User.UserBuilder;

import java.util.Optional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepository repository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<LoginUser> user = repository.findByUsername(username);

        UserBuilder builder = null;
        if (user.isPresent()) {
            LoginUser currentLoginUser = user.get();
            builder = User.withUserDetails(currentLoginUser);
            builder.username(currentLoginUser.username);
            builder.password(currentLoginUser.password);
            builder.roles(currentLoginUser.getAuthorities().toString());
        } else {
            throw new UsernameNotFoundException("User not found");
        }
        return builder.build();
    }
}
