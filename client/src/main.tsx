import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n";

// Reset any manually saved theme so it always follows the device preference
localStorage.removeItem("vite-ui-theme");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
