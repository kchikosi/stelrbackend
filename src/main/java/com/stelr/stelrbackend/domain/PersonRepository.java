package com.stelr.stelrbackend.domain;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface PersonRepository extends CrudRepository<Person, Long> {
    Optional<Person> findById(@Param("id") long id);
}
