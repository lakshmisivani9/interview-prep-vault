import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <nav style={styles.nav}>
      <Link to="/home" style={{ textDecoration: 'none' }}>
        <h2 style={styles.logo}>📚 Interview Prep Vault</h2>
      </Link>

      <div style={styles.links}>
        <Link to="/home" style={styles.link}>Home</Link>
        <Link to="/questions" style={styles.link}>Questions</Link>
        <Link to="/add" style={styles.link}>+ Add</Link>

        <button onClick={handleLogout} style={styles.btn}>
          Logout
        </button>
      </div>
    </nav>
  )
}


const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px'
  },

  logo: {
    color: 'black'
  },

  links: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  },

  link: {
    textDecoration: 'none'
  },

  btn: {
    cursor: 'pointer'
  }
}


export default Navbar