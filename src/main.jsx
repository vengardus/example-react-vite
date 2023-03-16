import React from "react";
import ReactDOM from "react-dom/client";
import { AppLaunches } from "./components/AppLaunches";
import { CounterApp } from "./components/CounterApp";
import FirstApp from "./components/FirstApp";
import './assets/css/styles.css'


ReactDOM.createRoot( document.getElementById('root' ) ).render(
    <React.StrictMode>
        {/* <FirstApp name='Gardus' number={ 27 } /> */}
        
        {/* Ejemplo para default Props */}
        {/* <FirstApp  /> */}

        {/* <CounterApp value={ 27 }/> */}

        <AppLaunches />

    </React.StrictMode>
)
