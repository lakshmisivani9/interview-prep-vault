package com.vault.interview_prep_vault.config;

import java.util.Date;

import org.springframework.stereotype.Service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {
    // secret key should have atleast 32 chars
    private final String secretKey = "mysecretkeymysecretkeymysecretkeymysecretkey";

    public String generateToken(String email) {
        return Jwts.builder()
                .subject(email)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
                .signWith(Keys.hmacShaKeyFor(secretKey.getBytes()))
                .compact(); // Will create some string which is out token
    }

    // return token and extract the username
    public String extractEmail(String token) {
        return Jwts.parser() // for validating the token
                .verifyWith(Keys.hmacShaKeyFor(secretKey.getBytes())) // verifying the token with key
                .build()
                .parseSignedClaims(token) // token is the claim
                .getPayload() // getting all the data
                .getSubject();
    }
}
