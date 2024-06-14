package com.stelr.stelrbackend.web;

import com.stelr.stelrbackend.domain.Account;
import com.stelr.stelrbackend.domain.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {
    @Autowired
    private AccountRepository repository;
    @GetMapping("/accounts")
    public Iterable<Account> getAccounts() {
        return repository.findAll();
    }
}
