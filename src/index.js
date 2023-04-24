import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from "./App.js";
import { UserContextProvider } from "./context/UserContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </Router>
);
