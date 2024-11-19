import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "../src/styles/navBar.css";
import "../src/styles/titlePage.css";
import "../src/styles/homePage.css";
import "../src/styles/aboutPage.css";
import "../src/styles/analyticsPage.css";
import "../src/styles/recipePage.css";
import "../src/styles/contactPage.css";
import "../src/styles/appMediaQuery.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
