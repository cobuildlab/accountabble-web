import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";

/**
 * @modules
 */
import { BrowserRouter } from "react-router-dom";
import { firebaseConfig } from "./config";

/**
 * @css
 */
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import "animate.css";

/**
 * @components
 */
import App from "./App";

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
