import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Questions from './pages/Questions'
import AddQuestion from './pages/AddQuestion'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import Protected from './components/Protected'

function Layout() {
  const location = useLocation()
  const hideNavbar = ['/', '/login', '/register'].includes(location.pathname)

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Protected><Dashboard /></Protected>} />
        <Route path="/questions" element={<Protected><Questions /></Protected>} />
        <Route path="/add" element={<Protected><AddQuestion /></Protected>} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App