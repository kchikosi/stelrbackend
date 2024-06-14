package com.stelr.stelrbackend.web;

import com.stelr.stelrbackend.domain.AccountType;
import com.stelr.stelrbackend.domain.AccountTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountTypeController {
    @Autowired
    private AccountTypeRepository repository;

    @GetMapping("/accounttypes")
    public Iterable<AccountType> getAccountTypes() {
        return repository.findAll();
    }


}
