import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TitlePage from "./pages/TitlePage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TitlePage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/analyticsPage" element={<AnalyticsPage />} />
        <Route path="/contactPage" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
