package com.vault.interview_prep_vault.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.vault.interview_prep_vault.config.JwtService;
import com.vault.interview_prep_vault.model.User;
import com.vault.interview_prep_vault.repository.UserRepository;

@Service
public class UserService {
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @Autowired
    private UserRepository repository;

    public UserService(PasswordEncoder passwordEncoder, JwtService jwtService, UserRepository repository) {
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.repository = repository;
    }

    public User register(User user) {

        user.setPassword(
                passwordEncoder.encode(user.getPassword()));

        return repository.save(user);
    }

    public String login(String email, String password) {

    Optional<User> optionalUser = repository.findFirstByEmail(email);

    if (optionalUser.isPresent()) {

        User user = optionalUser.get();

        if (passwordEncoder.matches(password, user.getPassword())) {
            return jwtService.generateToken(user.getEmail());
        }
    }

    return null;
}
}