import React from "react";
import { createRoot } from "react-dom/client";
import Container from "./components/Container";
import App from "./App";
import "./index.css";

// eslint-disable-next-line
const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>
);
