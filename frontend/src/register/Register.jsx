import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);


  const handleSubmit= async (e)=>{
    e.preventdefault();
    setError(false)
    try{
  const res= await axios.post("/api/auth/register",{
      username,
      email,
      password,
    });
    res.data && window.location.replace("/login");
    }catch(err){
      setError(true)
    }
  
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Your username"
          onChange={ (e)=>setUsername(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Your Email"
          onChange={ (e)=>setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Your Password"
          onChange={ (e)=>setPassword(e.target.value)}
        />
        {/* <div className="remember">
          <p className="registerForget">
            Have an account ?
            <Link className="menubar " to="/login">
              LOGIN
            </Link>
          </p>
        </div> */}

        <button className="registerBtn" type="submit">
            REGISTER
        </button>
      </form>

      <button className="registerLogin">
        <Link className="menuBar" to="/login">
          LOGIN
        </Link>
      </button>
      {error && <span style={{color:"red"}}>Something went wrong!</span>}
    </div>
  );
};

export default Register;
