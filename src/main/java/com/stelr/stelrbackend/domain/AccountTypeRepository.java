package com.stelr.stelrbackend.domain;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface AccountTypeRepository extends CrudRepository<AccountType, Long> {
    Optional<AccountType> findById(@Param("id") long id);
}
