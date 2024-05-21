import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../Login/Login';
import LandingPage from '../LandingPage/LandingPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login titulo="NOME FLASH CARDS" texto="Desbloqueie o conhecimento com nossos flash cards inteligentes." />} />
        <Route path="/landing-page" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
