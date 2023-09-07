import "./index.css";
import React from "react";
import App from "./App";
import client from "./config/client";
import ReactDOM from "react-dom/client";
import { store } from "@/src/global/store";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
