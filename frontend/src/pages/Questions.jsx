import { useState, useEffect } from 'react'
import QuestionCard from '../components/QuestionCard'
import FilterBar from '../components/FilterBar'

function Questions() {
  const [questions, setQuestions] = useState([])
  const [filter, setFilter] = useState('All')

  const fetchQuestions = async () => {
    const token = localStorage.getItem('token')
    const response = await fetch('http://localhost:8000/questions', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    const data = await response.json()
    setQuestions(data)
  }

  useEffect(() => {
    fetchQuestions()
  }, [])

  const filtered = filter === 'All'
    ? questions
    : questions.filter(q => q.topic === filter)

  const handleDelete = (id) => {
    setQuestions(questions.filter(q => q.id !== id))
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>All Questions 📋</h2>
      <FilterBar selected={filter} onSelect={setFilter} />
      <div style={styles.list}>
        {filtered.length === 0
          ? <p>No questions found.</p>
          : filtered.map(q => (
            <QuestionCard key={q.id} question={q} onDelete={handleDelete} />
          ))
        }
      </div>
    </div>
  )
}

const styles = {
  container: { padding: '32px', maxWidth: '800px', margin: '0 auto' },
  title: { fontSize: '28px', marginBottom: '16px', color: '#1e1e2e' },
  list: { display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' },
}

export default Questions
