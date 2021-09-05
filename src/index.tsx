import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles/styles.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import Loader from "react-loader-spinner";
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <React.Suspense
        fallback={
          <div className="flex items-center justify-center w-screen h-screen">
            <Loader
              type="ThreeDots"
              color="#1CC4CA"
              height={100}
              width={100}
              timeout={60000} //3 secs
            />
          </div>
        }
      >
        <App />
      </React.Suspense>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
