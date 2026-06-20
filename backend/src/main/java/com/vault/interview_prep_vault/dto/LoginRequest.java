package com.vault.interview_prep_vault.dto;

import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}
