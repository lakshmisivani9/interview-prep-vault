package com.vault.interview_prep_vault.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.vault.interview_prep_vault.model.Question;
import com.vault.interview_prep_vault.service.QuestionService;

@RestController
@RequestMapping("/questions")
@CrossOrigin(origins = "*")
public class QuestionController {

    @Autowired
    private QuestionService service;

    // Get all questions
    @GetMapping
    public List<Question> getAllQuestions() {
        return service.getAllQuestions();
    }

    // Get question by id
    @GetMapping("/{id}")
    public Optional<Question> getQuestionById(@PathVariable Integer id) {
        return service.getById(id);
    }

    // Get questions by topic
    @GetMapping("/topic/{topic}")
    public List<Question> getByTopic(@PathVariable String topic) {
        return service.getByTopic(topic);
    }

    // Add question
    @PostMapping
    public Question addQuestion(@RequestBody Question question) {
        return service.addQuestion(question);
    }

    // Delete question
    @DeleteMapping("/{id}")
    public String deleteQuestion(@PathVariable Integer id) {

        boolean deleted = service.deleteQuestion(id);

        if (deleted) {
            return "Question deleted successfully";
        }

        return "Question not found";
    }

    @PutMapping("/{id}")
    public Question update(@PathVariable int id, @RequestBody Question updated) {
        return service.update(id, updated);
    }
}