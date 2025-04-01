import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { TempoDevtools } from "tempo-devtools";

// Import and define lord-icon element
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";

// Initialize lord-icon element
defineElement(lottie.loadAnimation);

// Initialize Tempo
TempoDevtools.init();

const basename = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="eagle-eye-theme">
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
