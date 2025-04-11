import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// This is important for GitHub Pages to understand the base path
const basename = import.meta.env.BASE_URL || "/";

createRoot(document.getElementById("root")!).render(<App basename={basename} />);
