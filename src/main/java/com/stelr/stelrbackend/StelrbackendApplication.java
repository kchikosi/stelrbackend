package com.stelr.stelrbackend;

import com.stelr.stelrbackend.domain.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@SpringBootApplication
public class StelrbackendApplication implements CommandLineRunner {
    private static final Logger logger = LoggerFactory.getLogger(StelrbackendApplication.class);

    @Autowired
    private PersonRepository personRepository;
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private AccountTypeRepository accountTypeRepository;

    public static void main(String[] args) {
        SpringApplication.run(StelrbackendApplication.class, args);
        logger.info("Application started");
    }

    @Override
    public void run(String... args) throws Exception {
        AccountType accountType = new AccountType("Investor", "Investor account", Timestamp.valueOf(LocalDateTime.now()), Timestamp.valueOf(LocalDateTime.now()));
        accountTypeRepository.save(accountType);

        Account account = new Account(Timestamp.valueOf(LocalDateTime.now()), Timestamp.valueOf(LocalDateTime.now()));
        account.setAccountType(accountType);
        accountRepository.save(account);

        Person person = new Person("Kotsanai", "Chikosi", "R", "thegoat@gmail.com", "603 256 9898", "passwd", Timestamp.valueOf(LocalDateTime.now()), Timestamp.valueOf(LocalDateTime.now()));

        person.setAccount(account);
        personRepository.save(person);


    }
}
