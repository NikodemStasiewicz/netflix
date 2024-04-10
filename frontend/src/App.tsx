import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import './index.css'
import RegisterForm from './components/RegisterForm';


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path='/' element={<HomePage/>} />
      <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
    
  );
};

export default App;
