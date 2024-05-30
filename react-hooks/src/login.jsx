import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function Login({setUser}) {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Here are the creds: ', name, email)
        if(!name || !email){ return; }
        setUser({name: name, email: email})
        navigate('/dashboard')
    }
  return (
    <form className="login-container" onSubmit={handleSubmit}>
      <label htmlFor="username">Enter Username: </label>
      <input type="text" id="username" name="username" className="text_input" onChange={(e) => {setName(e.target.value)}}/>
      <label htmlFor="email">Enter Email: </label>
      <input type="text" id="email" name="email" className="text_input" onChange={(e) => {setEmail(e.target.value)}}/>
      <button className="button">Log In</button>
    </form>
  );
}
