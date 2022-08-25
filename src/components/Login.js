import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';
import LoginNav from "./LoginNav";
import cylinder from "../assets/cylinder.png"
import gear from "../assets/gear.png"

export default function Login(){
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({username:"",password:""});

   function handleClick(input) { 
setCredentials((prevCred)=>({...prevCred, [input.target.name]: input.target.value}))
    console.log(credentials);
}
    function handleSubmit(e){
        e.preventDefault();
    }
    return(
        <div className="login-page">
            <img className="cylinder-img" src={cylinder} alt='cylinder object' />
            <img className="gear-img" src={gear} alt='gear object' />
        <LoginNav />
        <h1>Log in with</h1>
        <div className='login-container'>
        <input type="text" value={credentials.username} onChange={handleClick} name="username" placeholder="Username" className="login-input" />
            <input type="password" onChange={handleClick} value={credentials.password} name="password" placeholder="Password" className="login-input" />
        </div>
        <div className="btn-container">
        <button onClick={handleSubmit} className="login-btn">Login</button>
        <button onClick={()=> navigate('/register')} className="login-btn">Register</button>
        </div>
        </div>
    )
}