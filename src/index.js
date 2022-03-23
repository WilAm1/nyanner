import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CurrentUserContext } from "./contexts/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CurrentUserContext>
        <App />
      </CurrentUserContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
