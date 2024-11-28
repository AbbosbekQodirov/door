import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate= useNavigate()
  return (
    <div>
      <div className="container">
        <button onClick={()=>{
            localStorage.setItem("token", "admin")
            navigate("/")
        }} >Go Admin</button>
      </div>
    </div>
  );
}

export default Login