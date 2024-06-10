package com.stelr.stelrbackend.domain;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;

@RepositoryRestResource
@CrossOrigin
public interface AccountRepository extends CrudRepository<Account, Long> {
    Optional<Account> findById(@Param("id") long id);
}
