import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BASE_URL } from "./utils/baseUrl";

// Configura il base URL per GitHub Pages
if (import.meta.env.PROD) {
  console.log(`Applicazione in esecuzione con base path: ${BASE_URL}`);
}

// Create the root element and render the app
createRoot(document.getElementById("root")!).render(<App />);
