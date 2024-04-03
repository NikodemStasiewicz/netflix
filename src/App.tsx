import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import LoginForm from './login';
import './index.css'

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path='/' element={<HomePage/>} />
      </Routes>
    </Router>
    
  );
};

export default App;
