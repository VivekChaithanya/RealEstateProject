package com.resp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import com.resp.model.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
    
    // Find a user by their email
    Optional<User> findByEmail(String email);

//    // Find a user by their username
//    Optional<User> findByUsername(String username);

    // Find a user by both email and password
    Optional<User> findByEmailAndPassword(String email, String password);
}
