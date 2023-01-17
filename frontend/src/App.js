import React from 'react';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import RegisterUser from './pages/RegisterUser';
import Login from './pages/Login';
import LanguagePage from './pages/LanguagePage';

function App() {
  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register-user" element={<RegisterUser />} />
            <Route path="/login" element={<Login />} />
            <Route path="/language/:language" element={<LanguagePage />} />
          </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
