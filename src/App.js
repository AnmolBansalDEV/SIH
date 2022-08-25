import React from 'react';
import './App.css';
import './login-page.css'
import './footer-page.css'
import './registration-page.css'
import HomePage from './components/HomePage'
import Team from './components/Team';
import Login from './components/Login';
import Error from './components/Error';
import Register from './components/Register';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import LoginNav from './components/LoginNav';
// import LoginNav from './components/LoginNav';

function App() {
  return (
      <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/team' element={<Team />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<Error />} />
      </Routes>
      {/* <HomePage />
      <About />
      <Login /> */}
    </div>
    </Router>
  );
}

export default App;
