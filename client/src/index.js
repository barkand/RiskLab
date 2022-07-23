import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Template/App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import ErrorBoundary from "./ErrorBoundary";
import "./Template/assets/styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ErrorBoundary>
);

reportWebVitals();
serviceWorker.register();
