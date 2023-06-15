import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../App.css';

const Login = () => {

  const navigate= useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate("/todo")
    
      console.log('Email:', email);
      console.log('Password:', password);
     
    };

  
  return (
    <div className='App'> 
 <h2>Login  </h2>
 <p>Welcome to mlab studios login page, by Sedi</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email" placeholder='Enter email'
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password" placeholder='Enter password'
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      
     <Link to={"/"}><button className='btnLink'>Back</button></Link>
 
    </div>
  );
};

export default Login;
