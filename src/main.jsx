import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// vite.config.js
export default {
  build: {
    rollupOptions: {
      external: ['/src/main.jsx'],
    },
  },
};
