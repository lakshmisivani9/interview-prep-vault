package com.vault.interview_prep_vault.config.exceptions;

public class UserNotFoundException extends Exception {
    public UserNotFoundException() {
        super("User Not Found!!");
    }
}
