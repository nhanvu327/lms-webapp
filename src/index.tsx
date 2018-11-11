import React from "react";
import * as Sentry from "@sentry/browser";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_KEY,
  environment: process.env.NODE_ENV,
  blacklistUrls: ['localhost']
});

window.Sentry = Sentry;

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

