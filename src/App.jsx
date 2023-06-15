
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Todo from './assets/Todo';
import CreateAccount from './assets/createAccount';
import Home from './assets/home';
import Login from './assets/login';

function App() {
return(
<div className='home'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
 

</div>

    
  );
}

export default App;
