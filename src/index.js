import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./pages/GlobalStyles";
import Main from "./pages/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Main />
  </React.StrictMode>
);
