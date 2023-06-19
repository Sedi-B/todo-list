import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const CreateAccount = () => {
 const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login")



    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
 
  };

  return (
    <div className='Account'>
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Names:</label>
          <input
            type="text"
            placeholder='Names and surname'
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder='E-mail addresss'
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
         <button type="submit">Register</button>
        </div>
        </form>
      <> 
      Already have an account? <Link to={"/login"}><button className='btnLink'>Login</button></Link>
      
      <Link to={"/"}><button className='btnLink'>Back</button></Link>
   
     
      </>
      <footer> @Phoshoko RR</footer>
    </div>
  );
};


export default CreateAccount;


