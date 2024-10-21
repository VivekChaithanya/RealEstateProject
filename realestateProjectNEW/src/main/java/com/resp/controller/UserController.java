package com.resp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.resp.model.User;
import com.resp.dto.UserDto;
import com.resp.repository.UserRepo;

@RestController
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserRepo repo;

    // Create a new user
    @PostMapping("/details")
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto) {
        User user = new User();
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        
        User savedUser = repo.save(user);

        UserDto savedUserDto = new UserDto();
        savedUserDto.setId(savedUser.getId());
        savedUserDto.setFirstName(savedUser.getFirstName());
        savedUserDto.setLastName(savedUser.getLastName());
        savedUserDto.setEmail(savedUser.getEmail());
        savedUserDto.setPassword(savedUser.getPassword());  // Ensure you return the password if required

        return ResponseEntity.status(HttpStatus.CREATED).body(savedUserDto);
    }

    // Get all users
    @GetMapping("/detailsget")
    public List<User> getUsers() {
        return repo.findAll();
    }

    // Get user by ID
    @GetMapping("/getUserById/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable int id) {
        Optional<User> userOptional = repo.findById(id);
        
        if (userOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        User user = userOptional.get();
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setFirstName(user.getFirstName());
        userDto.setLastName(user.getLastName());
        userDto.setEmail(user.getEmail());
        userDto.setPassword(user.getPassword());  // Ensure you return the password if required

        return ResponseEntity.ok(userDto);
    }

    // Update user
    @PutMapping("/user/update/{id}")
    public ResponseEntity<UserDto> updateUser(@PathVariable int id, @RequestBody UserDto updatedUserDto) {
        Optional<User> userOptional = repo.findById(id);
        
        if (!userOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();  
        }

        User existingUser = userOptional.get();
        existingUser.setFirstName(updatedUserDto.getFirstName());
        existingUser.setLastName(updatedUserDto.getLastName());
        existingUser.setEmail(updatedUserDto.getEmail());
        if (updatedUserDto.getPassword() != null && !updatedUserDto.getPassword().isEmpty()) {
            existingUser.setPassword(updatedUserDto.getPassword());
        }
        
        User savedUser = repo.save(existingUser);

        UserDto savedUserDto = new UserDto();
        savedUserDto.setId(savedUser.getId());
        savedUserDto.setFirstName(savedUser.getFirstName());
        savedUserDto.setLastName(savedUser.getLastName());
        savedUserDto.setEmail(savedUser.getEmail());
        savedUserDto.setPassword(savedUser.getPassword());  // Ensure you return the password if required

        return ResponseEntity.ok(savedUserDto);
    }

    // Delete user by ID
    @DeleteMapping("/deleteUserById/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable int id) {
        Optional<User> userOptional = repo.findById(id);
        
        if (userOptional.isPresent()) {
            repo.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}
