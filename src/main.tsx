import "./index.css";
import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { store } from "@/src/global/store";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>
);
