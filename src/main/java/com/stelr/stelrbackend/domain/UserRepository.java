package com.stelr.stelrbackend.domain;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource
public interface UserRepository extends CrudRepository<LoginUser, Long> {
    Optional<LoginUser> findByUsername (@Param("username") String username);
}
