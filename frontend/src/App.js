import React from 'react';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import RegisterUser from './pages/RegisterUser';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register-user" element={<RegisterUser />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
