package com.resp.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.resp.dto.LoginDto;
import com.resp.dto.UserDto;
import com.resp.exceptions.UserException;
import com.resp.model.User;
import com.resp.repository.UserRepo;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepository;

    // Login logic
    public Optional<UserDto> loginUser(LoginDto loginDto) throws UserException {

        String email = loginDto.getEmail();
        String password = loginDto.getPassword();
        System.out.println("Email: " + email);
        System.out.println("Password: " + password);

        // Check if the user exists by email
        Optional<User> user = userRepository.findByEmail(email);

        if (user.isPresent()) {
            // Check if the email and password match
            Optional<User> userWithPassword = userRepository.findByEmailAndPassword(email, password);
            System.out.println(userWithPassword);

            if (userWithPassword.isPresent()) {
                // Convert User to UserDto
                UserDto userDto = new UserDto();
                User foundUser = userWithPassword.get();
                userDto.setId(foundUser.getId());
                userDto.setFirstName(foundUser.getFirstName());
                userDto.setLastName(foundUser.getLastName());
                userDto.setEmail(foundUser.getEmail());

                return Optional.of(userDto);
            } else {
                throw new UserException("Incorrect email/password combination");
            }

        } else {
            throw new UserException("Email not found");
        }
    }

    // Method to find user by email (for other uses)
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
