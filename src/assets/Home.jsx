// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
   <div className='homepage'>
    <header> 
      @Sedi-Do
    </header>
<h1> 
Welcome to the TO DO LIST application
</h1>
   <ul className='links'>  
  <Link to={"/login"}><button>Login</button></Link>
    <br/>
      <Link to={"/createAccount"}><button>Create Account</button></Link>
<br/>
      <Link to={"/todo"}><button>Add Task</button></Link> 
       </ul> 
       <footer> @Phoshoko RR</footer>
    </div>
  );
};

export default Home;
