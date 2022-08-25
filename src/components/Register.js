import React,{useState} from "react";
import LoginNav from "./LoginNav";

export default function Register(){
    const [regDetails, setRegDetails] = useState(
        {
            Pname: "",
            institution: "",
            email: "",
            username: "",
            password: "",
            country: "",
            state: "",
            organization: ""
    }
    );
    function handleClick(detail){
        console.log(detail);
        setRegDetails((prevDetails)=>({ ...prevDetails, [detail.target.name]: detail.target.value }));
        console.log(regDetails);
    }
    function handleSignUp(e){
        e.preventDefault();
        console.log(regDetails);
    }
    return(
        <div className="registration-page">
        <LoginNav />
        
        <h1>Register</h1>
        <div className='registration-container'>
            <input type="text" value={regDetails.Pname} onChange={handleClick} name="Pname" placeholder="Name" className="registration-input full-size" />
            <input type="text" value={regDetails.institution} onChange={handleClick} name="institution" placeholder="Institution" className="registration-input full-size" />
            <div className="reg-grid">
            <input type="text" value={regDetails.email} onChange={handleClick} name="email" placeholder="Email" className="registration-input grid-mem shift-right" />
            <input type="text" value={regDetails.username} onChange={handleClick} name="username" placeholder="Username" className="registration-input grid-mem shift-left" />
            <input type="password" onChange={handleClick} value={regDetails.password} name="password" placeholder="Password" className="registration-input grid-mem shift-right" />
            <input type="text" value={regDetails.country} onChange={handleClick} name="country" placeholder="Country" className="registration-input grid-mem shift-left" />
            <input type="text" value={regDetails.state} onChange={handleClick} name="state" placeholder="State" className="registration-input grid-mem shift-right" />
            <input type="text" value={regDetails.organization} onChange={handleClick} name="organization" placeholder="Organization" className="registration-input grid-mem shift-left" />
            </div>
        </div>
        <div className="btn-container">
        <button  onClick={handleSignUp} className="login-btn">Sign Up</button>
        
        </div>
        </div>
    )
}