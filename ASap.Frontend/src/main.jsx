import App from "@/App";
import "@assets/fonts/noir-pro/styles.css";
import "antd/dist/reset.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
