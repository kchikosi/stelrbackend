package com.stelr.stelrbackend.domain;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.sql.Timestamp;
import java.util.Optional;

@RepositoryRestResource
public interface PersonRepository extends JpaRepository<Person, Long> {
    Optional<Person> findById(@Param("id") long id);

    @Modifying
    @Query("UPDATE Person p SET p.account=?1, p.dateModified=?2, p.email=?3, p.firstName=?4, p.initial=?5, p.lastName=?6, p.password=?7, p.phone=?8 WHERE p.personId=?9")
    @Transactional
    void updateByPersonId(Account account, Timestamp date_modified, String email, String first_name, String initial, String last_name, String password, String phone, Long id);

    Optional<Person> findByEmail(@Param("email") String email);
}
