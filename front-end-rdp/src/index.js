import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
// import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";

// Sentry.init({
//   dsn:
//     "https://8d63bfc308484957a544aa0521013d07@o472283.ingest.sentry.io/5706607",
//   integrations: [new Integrations.BrowserTracing()],

//   tracesSampleRate: 1.0,
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
