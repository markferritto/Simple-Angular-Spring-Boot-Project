package com.springangularproject.springangularproject.application.application.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springangularproject.springangularproject.application.application.entities.User;
import com.springangularproject.springangularproject.application.application.repositories.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * Returns a list of all users in the system.
     * 
     * @return a list of all users in the system
     */
    @GetMapping("/users")
    public List<User> getUsers() {
        return (List<User>) userRepository.findAll();
    }

    
/**
 * Adds a new user to the system.
 * 
 * @param user the user to be added
 */
    @PostMapping("/users")
    void addUser(@RequestBody User user) {
        if (user != null) {
            userRepository.save(user);
        } else {
            throw new IllegalArgumentException("User object cannot be null");
        }
    }

}
