import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { SecondComponent } from "./SecondComponent";


ReactDOM.createRoot( document.getElementById('root' ) ).render(
    <React.StrictMode>
        <App/>
        <SecondComponent/>
    </React.StrictMode>
)
