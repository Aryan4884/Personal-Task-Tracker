import React, { useState } from "react";

const Login = ({onLogin}) => {
  const [userName,setUserName] = useState('');

  const handleSubmit =(e)=>{
     e.preventDefault();
     if(userName.trim()){
        localStorage.setItem('userName', userName);
        onLogin(userName);
     }
  }
  return(
 <div className="login">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
    <input type="text" 
        placeholder="Enter Username" 
        value={userName} 
        onChange={(e)=>setUserName(e.target.value)}
        required
    />
    <button type="submit">Login</button>
    </form>
 </div>
  )
};

export default Login;
