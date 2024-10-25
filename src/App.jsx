import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TitlePage from "./pages/TitlePage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TitlePage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
