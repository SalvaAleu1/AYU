import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./design/tokens.css";
import "./styles.css";
import "./pages/pages.css";
import "./pages/leadership.css";
import "./pages/work.css";
import "./pages/communications.css";
import "./pages/membership-media.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
