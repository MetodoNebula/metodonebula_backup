import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { initAnalytics } from "./lib/analytics";
import "./styles.css";

const root = document.getElementById("root");

initAnalytics();

if (!root) {
  throw new Error("Root element #root not found");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
