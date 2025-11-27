import { StrictMode } from "react"; // StrictMode 문법검사, mian.tsx가 가장먼저 최초 실행이 됨
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
