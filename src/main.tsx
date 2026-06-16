import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import NebulaLanding from "./routes";
import "./styles.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element #root not found");
}

createRoot(root).render(
  <StrictMode>
    <NebulaLanding />
  </StrictMode>,
);
