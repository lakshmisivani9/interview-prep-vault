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