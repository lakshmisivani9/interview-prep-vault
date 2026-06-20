package com.vault.interview_prep_vault.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vault.interview_prep_vault.model.Question;
import com.vault.interview_prep_vault.repository.QuestionRepository;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository repository;


    // Get all questions
    public List<Question> getAllQuestions() {
        return repository.findAll();
    }


    // Get question by id
    public Optional<Question> getById(Integer id) {
        return repository.findById(id);
    }


    // Get questions by topic
    public List<Question> getByTopic(String topic) {
        return repository.findByTopic(topic);
    }


    // Add new question
    public Question addQuestion(Question q) {
        return repository.save(q);
    }


    // Delete question
    public boolean deleteQuestion(Integer id) {

        if(repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }

        return false;
    }

    public Question update(int id, Question updated) {

    Optional<Question> optional = repository.findById(id);

    if (optional.isPresent()) {
        Question q = optional.get();

        q.setTopic(updated.getTopic());
        q.setDifficulty(updated.getDifficulty());
        q.setQuestion(updated.getQuestion());
        q.setAnswer(updated.getAnswer());

        return repository.save(q);
    }

    return null;
}
}