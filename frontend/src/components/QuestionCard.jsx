import { useState } from 'react'

function QuestionCard({ question, onDelete }) {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3 style={styles.title}>{question.question}</h3>
        <div style={styles.badges}>
          <span style={styles.topic}>{question.topic}</span>
          <span style={{
            ...styles.difficulty,
            backgroundColor:
              question.difficulty === 'Easy' ? '#d4edda' :
              question.difficulty === 'Medium' ? '#fff3cd' : '#f8d7da',
            color:
              question.difficulty === 'Easy' ? '#155724' :
              question.difficulty === 'Medium' ? '#856404' : '#721c24',
          }}>
            {question.difficulty}
          </span>
        </div>
      </div>

      {showAnswer && (
        <p style={styles.answer}>{question.answer}</p>
      )}

      <div style={styles.actions}>
        <button onClick={() => setShowAnswer(!showAnswer)} style={styles.showBtn}>
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </button>
        <button onClick={() => onDelete(question.id)} style={styles.deleteBtn}>
          Delete
        </button>
      </div>
    </div>
  )
}

const styles = {
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    border: '1px solid #eee',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  title: { fontSize: '17px', color: '#1e1e2e', margin: 0 },
  badges: { display: 'flex', gap: '8px' },
  topic: {
    backgroundColor: '#e8e9ff',
    color: '#7c83fd',
    padding: '4px 10px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
  },
  difficulty: {
    padding: '4px 10px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
  },
  answer: {
    backgroundColor: '#f5f5f5',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#333',
    marginBottom: '12px',
  },
  actions: { display: 'flex', gap: '10px' },
  showBtn: {
    backgroundColor: '#7c83fd',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '13px',
  },
  deleteBtn: {
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '13px',
  }
}

export default QuestionCard
