// import { Link, useNavigate } from 'react-router-dom'

// function Navbar() {
//     const navigate = useNavigate()

//     const handleLogout = () => {
//         localStorage.removeItem('token')
//         navigate('/')
//     }

//     return (
//         <nav style={styles.nav}>
//             <h2 style={styles.logo}>📚 Interview Prep Vault</h2>
//             <div style={styles.links}>
//                 <Link to="/home" style={styles.link}>Home</Link>
//                 <Link to="/questions" style={styles.link}>Questions</Link>
//                 <Link to="/add" style={styles.link}>+ Add</Link>
//                 <button onClick={handleLogout} style={styles.btn}>Logout</button>
//             </div>
//         </nav>
//     )
// }

// const styles = {
//     nav: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '12px 32px',
//         backgroundColor: '#1e1e2e',
//         color: 'white',
//     },
//     logo: {
//         margin: 0,
//         fontSize: '20px',
//         color: '#7c83fd',
//     },
//     links: {
//         display: 'flex',
//         gap: '24px',
//         alignItems: 'center',
//     },
//     link: {
//         color: 'white',
//         textDecoration: 'none',
//         fontSize: '15px',
//     },
//     btn: {
//         backgroundColor: '#ff4d4d',
//         color: 'white',
//         border: 'none',
//         padding: '8px 16px',
//         borderRadius: '6px',
//         cursor: 'pointer',
//         fontSize: '14px',
//     }
// }

// export default Navbar


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