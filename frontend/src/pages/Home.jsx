// import { useEffect, useState } from "react";

// export default function Home() {
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8000/questions")
//       .then(res => res.json())
//       .then(data => setQuestions(data))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div>
//       <h1>Interview Prep Vault</h1>

//       <h2>Questions</h2>

//       <ul>
//         {questions.map((q) => (
//           <li key={q.id}>
//             <b>{q.topic}</b> - {q.question}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// import { useNavigate } from 'react-router-dom'

// function Home() {
//   const navigate = useNavigate()

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>Welcome to Interview Prep Vault 📚</h1>
//       <p style={styles.subtitle}>Prepare smarter. Crack interviews faster.</p>
//       <div style={styles.btnGroup}>
//         <button onClick={() => navigate('/questions')} style={styles.primary}>
//           View Questions
//         </button>
//         <button onClick={() => navigate('/add')} style={styles.secondary}>
//           + Add Question
//         </button>
//       </div>
//     </div>
//   )
// }

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '80vh',
//     gap: '16px',
//   },
//   title: {
//     fontSize: '36px',
//     color: '#1e1e2e',
//   },
//   subtitle: {
//     fontSize: '18px',
//     color: '#555',
//   },
//   btnGroup: {
//     display: 'flex',
//     gap: '16px',
//     marginTop: '24px',
//   },
//   primary: {
//     backgroundColor: '#7c83fd',
//     color: 'white',
//     border: 'none',
//     padding: '12px 28px',
//     borderRadius: '8px',
//     fontSize: '16px',
//     cursor: 'pointer',
//   },
//   secondary: {
//     backgroundColor: '#1e1e2e',
//     color: 'white',
//     border: 'none',
//     padding: '12px 28px',
//     borderRadius: '8px',
//     fontSize: '16px',
//     cursor: 'pointer',
//   }
// }

// export default Home


import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Interview Prep Vault 📚</h1>
      <p style={styles.subtitle}>Prepare smarter. Crack interviews faster.</p>
      <div style={styles.btnGroup}>
        <button onClick={() => navigate('/login')} style={styles.primary}>
          Login
        </button>
        <button onClick={() => navigate('/register')} style={styles.secondary}>
          Register
        </button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: '16px',
  },
  title: { fontSize: '36px', color: '#1e1e2e' },
  subtitle: { fontSize: '18px', color: '#555' },
  btnGroup: { display: 'flex', gap: '16px', marginTop: '24px' },
  primary: {
    backgroundColor: '#7c83fd',
    color: 'white',
    border: 'none',
    padding: '12px 28px',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  secondary: {
    backgroundColor: '#1e1e2e',
    color: 'white',
    border: 'none',
    padding: '12px 28px',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
  }
}

export default Home