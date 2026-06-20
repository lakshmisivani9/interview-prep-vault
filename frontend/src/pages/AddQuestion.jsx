

// // import { useState } from 'react'
// // import { useNavigate } from 'react-router-dom'

// // function AddQuestion() {
// //   const navigate = useNavigate()
// //   const [form, setForm] = useState({
// //     title: '',
// //     answer: '',
// //     topic: 'Java',
// //     difficulty: 'Easy'
// //   })

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value })
// //   }

// //   const handleSubmit = async (e) => {
// //     e.preventDefault()
// //     const token = localStorage.getItem('token')

// //     const response = await fetch('http://localhost:8000/questions', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //         'Authorization': `Bearer ${token}`
// //       },
// //       body: JSON.stringify(form)
// //     })

// //     if (response.ok) {
// //       navigate('/questions')
// //     } else {
// //       console.log('Error:', await response.text())
// //     }
// //   }

// //   return (
// //     <div style={styles.container}>
// //       <div style={styles.card}>
// //         <h2 style={styles.title}>Add New Question ➕</h2>
// //         <form onSubmit={handleSubmit} style={styles.form}>
// //           <input
// //             name="title"
// //             placeholder="Question Title"
// //             value={form.title}
// //             onChange={handleChange}
// //             style={styles.input}
// //             required
// //           />
// //           <textarea
// //             name="answer"
// //             placeholder="Answer"
// //             value={form.answer}
// //             onChange={handleChange}
// //             style={styles.textarea}
// //             required
// //           />
// //           <select name="topic" value={form.topic} onChange={handleChange} style={styles.input}>
// //             <option>Java</option>
// //             <option>Spring</option>
// //             <option>React</option>
// //             <option>DSA</option>
// //             <option>SQL</option>
// //           </select>
// //           <select name="difficulty" value={form.difficulty} onChange={handleChange} style={styles.input}>
// //             <option>Easy</option>
// //             <option>Medium</option>
// //             <option>Hard</option>
// //           </select>
// //           <button type="submit" style={styles.btn}>Add Question</button>
// //         </form>
// //       </div>
// //     </div>
// //   )
// // }

// // const styles = {
// //   container: {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     minHeight: '80vh',
// //   },
// //   card: {
// //     backgroundColor: '#f9f9f9',
// //     padding: '40px',
// //     borderRadius: '12px',
// //     boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
// //     width: '480px',
// //   },
// //   title: { textAlign: 'center', marginBottom: '24px', color: '#1e1e2e' },
// //   form: { display: 'flex', flexDirection: 'column', gap: '16px' },
// //   input: {
// //     padding: '12px',
// //     borderRadius: '8px',
// //     border: '1px solid #ddd',
// //     fontSize: '15px',
// //   },
// //   textarea: {
// //     padding: '12px',
// //     borderRadius: '8px',
// //     border: '1px solid #ddd',
// //     fontSize: '15px',
// //     height: '120px',
// //     resize: 'vertical',
// //   },
// //   btn: {
// //     backgroundColor: '#7c83fd',
// //     color: 'white',
// //     border: 'none',
// //     padding: '12px',
// //     borderRadius: '8px',
// //     fontSize: '16px',
// //     cursor: 'pointer',
// //   }
// // }

// // export default AddQuestion


// // import { useState } from 'react'
// // import { useNavigate } from 'react-router-dom'

// // function AddQuestion() {
// //     const navigate = useNavigate()
// //     const [form, setForm] = useState({
// //         title: '',
// //         answer: '',
// //         topic: 'Java',
// //         difficulty: 'Easy'
// //     })

// //     const handleChange = (e) => {
// //         setForm({ ...form, [e.target.name]: e.target.value })
// //     }

// //     const handleSubmit = (e) => {
// //         e.preventDefault()
// //         // TODO: connect backend later
// //         console.log('Question added:', form)
// //         navigate('/questions')
// //     }

// //     return (
// //         <div style={styles.container}>
// //             <div style={styles.card}>
// //                 <h2 style={styles.title}>Add New Question ➕</h2>
// //                 <form onSubmit={handleSubmit} style={styles.form}>
// //                     <input
// //                         name="title"
// //                         placeholder="Question Title"
// //                         value={form.title}
// //                         onChange={handleChange}
// //                         style={styles.input}
// //                         required
// //                     />
// //                     <textarea
// //                         name="answer"
// //                         placeholder="Answer"
// //                         value={form.answer}
// //                         onChange={handleChange}
// //                         style={styles.textarea}
// //                         required
// //                     />
// //                     <select name="topic" value={form.topic} onChange={handleChange} style={styles.input}>
// //                         <option>Java</option>
// //                         <option>Spring</option>
// //                         <option>React</option>
// //                         <option>DSA</option>
// //                         <option>SQL</option>
// //                     </select>
// //                     <select name="difficulty" value={form.difficulty} onChange={handleChange} style={styles.input}>
// //                         <option>Easy</option>
// //                         <option>Medium</option>
// //                         <option>Hard</option>
// //                     </select>
// //                     <button type="submit" style={styles.btn}>Add Question</button>
// //                 </form>
// //             </div>
// //         </div>
// //     )
// // }

// // const styles = {
// //     container: {
// //         display: 'flex',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         minHeight: '80vh',
// //     },
// //     card: {
// //         backgroundColor: '#f9f9f9',
// //         padding: '40px',
// //         borderRadius: '12px',
// //         boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
// //         width: '480px',
// //     },
// //     title: { textAlign: 'center', marginBottom: '24px', color: '#1e1e2e' },
// //     form: { display: 'flex', flexDirection: 'column', gap: '16px' },
// //     input: {
// //         padding: '12px',
// //         borderRadius: '8px',
// //         border: '1px solid #ddd',
// //         fontSize: '15px',
// //     },
// //     textarea: {
// //         padding: '12px',
// //         borderRadius: '8px',
// //         border: '1px solid #ddd',
// //         fontSize: '15px',
// //         height: '120px',
// //         resize: 'vertical',
// //     },
// //     btn: {
// //         backgroundColor: '#7c83fd',
// //         color: 'white',
// //         border: 'none',
// //         padding: '12px',
// //         borderRadius: '8px',
// //         fontSize: '16px',
// //         cursor: 'pointer',
// //     }
// // }

// // export default AddQuestion


// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// function AddQuestion() {
//   const navigate = useNavigate()
//   const [form, setForm] = useState({
//     title: '',
//     answer: '',
//     topic: 'Java',
//     difficulty: 'Easy'
//   })

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const token = localStorage.getItem('token')

//     const response = await fetch('http://localhost:8000/questions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       },
//       body: JSON.stringify(form)
//     })

//     if (response.ok) {
//       navigate('/questions')
//     } else {
//       console.log('Error:', await response.text())
//     }
//   }

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h2 style={styles.title}>Add New Question ➕</h2>
//         <form onSubmit={handleSubmit} style={styles.form}>
//           <input
//             name="title"
//             placeholder="Question Title"
//             value={form.title}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//           <textarea
//             name="answer"
//             placeholder="Answer"
//             value={form.answer}
//             onChange={handleChange}
//             style={styles.textarea}
//             required
//           />
//           <select name="topic" value={form.topic} onChange={handleChange} style={styles.input}>
//             <option>Java</option>
//             <option>Spring</option>
//             <option>React</option>
//             <option>DSA</option>
//             <option>SQL</option>
//           </select>
//           <select name="difficulty" value={form.difficulty} onChange={handleChange} style={styles.input}>
//             <option>Easy</option>
//             <option>Medium</option>
//             <option>Hard</option>
//           </select>
//           <button type="submit" style={styles.btn}>Add Question</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '80vh',
//   },
//   card: {
//     backgroundColor: '#f9f9f9',
//     padding: '40px',
//     borderRadius: '12px',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//     width: '480px',
//   },
//   title: { textAlign: 'center', marginBottom: '24px', color: '#1e1e2e' },
//   form: { display: 'flex', flexDirection: 'column', gap: '16px' },
//   input: {
//     padding: '12px',
//     borderRadius: '8px',
//     border: '1px solid #ddd',
//     fontSize: '15px',
//   },
//   textarea: {
//     padding: '12px',
//     borderRadius: '8px',
//     border: '1px solid #ddd',
//     fontSize: '15px',
//     height: '120px',
//     resize: 'vertical',
//   },
//   btn: {
//     backgroundColor: '#7c83fd',
//     color: 'white',
//     border: 'none',
//     padding: '12px',
//     borderRadius: '8px',
//     fontSize: '16px',
//     cursor: 'pointer',
//   }
// }

// export default AddQuestion


import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddQuestion() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    question: '',
    answer: '',
    topic: 'Java',
    difficulty: 'Easy'
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')

    const response = await fetch('http://localhost:8000/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(form)
    })

    if (response.ok) {
      navigate('/questions')
    } else {
      console.log('Error:', await response.text())
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Add New Question ➕</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            name="question"
            placeholder="Question Title"
            value={form.question}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <textarea
            name="answer"
            placeholder="Answer"
            value={form.answer}
            onChange={handleChange}
            style={styles.textarea}
            required
          />
          <select name="topic" value={form.topic} onChange={handleChange} style={styles.input}>
            <option>Java</option>
            <option>Spring</option>
            <option>React</option>
            <option>DSA</option>
            <option>SQL</option>
          </select>
          <select name="difficulty" value={form.difficulty} onChange={handleChange} style={styles.input}>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
          <button type="submit" style={styles.btn}>Add Question</button>
        </form>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '480px',
  },
  title: { textAlign: 'center', marginBottom: '24px', color: '#1e1e2e' },
  form: { display: 'flex', flexDirection: 'column', gap: '16px' },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '15px',
  },
  textarea: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '15px',
    height: '120px',
    resize: 'vertical',
  },
  btn: {
    backgroundColor: '#7c83fd',
    color: 'white',
    border: 'none',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
  }
}

export default AddQuestion