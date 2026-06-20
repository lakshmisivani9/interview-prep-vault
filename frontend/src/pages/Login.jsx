import { useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "email": email,
            "password": password
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const response = await fetch("http://localhost:8000/users/login", requestOptions)
        const body = await response.text();
        console.log(body);
        localStorage.setItem("token", body);
        if (!response.ok) {
            console.log(body);
            setError(body.message);
            throw new Error("Request failed with status", response.status);
        }
        navigate("/home");
    }
    return <>
        <div className="box">
            <h1> Login </h1>

            <input type="email" placeholder="Enter Email" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Enter Password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin} type="submit"> Login </button>
            <p> Don't have an account? <Link to="/register"> Register  </Link> </p>
            <p className='error'> {error} </p>
        </div>
    </>
}
