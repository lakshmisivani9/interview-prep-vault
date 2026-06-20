package com.vault.interview_prep_vault.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.vault.interview_prep_vault.model.User;
import com.vault.interview_prep_vault.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return service.register(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {

        String token = service.login(
                user.getEmail(),
                user.getPassword());

        if (token != null) {
            return token;
        }

        return "Invalid Credentials";
    }
}