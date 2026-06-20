package com.vault.interview_prep_vault.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "questions")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String topic;
    @Column
    private String difficulty;
    @Column
    private String question;
    @Column
    private String answer;

    public Question(String topic, String difficulty, String question, String answer) {
        this.topic = topic;
        this.difficulty = difficulty;
        this.question = question;
        this.answer = answer;
    }
}