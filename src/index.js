import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Circles } from "react-loader-spinner";
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    <Suspense
      fallback={
        <Circles
          height="120"
          width="120"
          color="#ffd800"
          ariaLabel="circles-loading"
          wrapperStyle={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#000",
          }}
          wrapperClass=""
          visible={true}
        />
      }
    >

      <App />
    </Suspense>
  </React.StrictMode>
);


serviceWorker.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
