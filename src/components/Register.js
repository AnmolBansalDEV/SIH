import React,{useState} from "react";
import LoginNav from "./LoginNav";

export default function Register(){
    const [regDetails, setRegDetails] = useState(
        {
            name: "",
            institution: "",
            email: "",
            username: "",
            password: "",
            country: "",
            state: "",
            organization: ""
    }
    );
    function handleClick(input){
        setRegDetails((prevDetails)=>(
            {...prevDetails, [input.target.name]: input.target.value}
        ))
    }
    function handleSignUp(){
        console.log(regDetails);
    }
    return(
        <div className="registration-page">
        <LoginNav />
        <h1>Register</h1>
        <div className='registration-container'>
            <input type="text" value={regDetails.username} onChange={handleClick} name="name" placeholder="Name" className="login-input full-size" />
            <input type="text" value={regDetails.username} onChange={handleClick} name="institution" placeholder="Institution" className="login-input full-size" />
            <div className="reg-grid">
            <input type="text" value={regDetails.username} onChange={handleClick} name="email" placeholder="Email" className="login-input grid-mem" />
            <input type="text" value={regDetails.username} onChange={handleClick} name="username" placeholder="Username" className="login-input grid-mem" />
            <input type="password" onChange={handleClick} value={regDetails.password} name="password" placeholder="Password" className="login-input grid-mem" />
            <input type="text" value={regDetails.username} onChange={handleClick} name="country" placeholder="Country" className="login-input grid-mem" />
            <input type="text" value={regDetails.username} onChange={handleClick} name="state" placeholder="State" className="login-input grid-mem" />
            <input type="text" value={regDetails.username} onChange={handleClick} name="organization" placeholder="Organization" className="login-input grid-mem" />
            </div>
        </div>
        <div className="btn-container">
        <button onclick={handleSignUp} className="login-btn">Sign Up</button>
        
        </div>
        </div>
    )
}