import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Assuming App.tsx now
import "./index.css";
import { Authenticator } from "@aws-amplify/ui-react";

// Ensure the element exists before rendering
const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement as HTMLElement).render(
    <React.StrictMode>
      <Authenticator>
        <App />
      </Authenticator>
    </React.StrictMode>
  );
}
