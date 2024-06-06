import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Navbar, Footer } from "./components/index.js";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
