import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";
import FirstApp from "./FirstApp";
import './styles.css'

ReactDOM.createRoot( document.getElementById('root' ) ).render(
    <React.StrictMode>
        {/* <FirstApp name='Gardus' number={ 27 } /> */}
        
        {/* Ejemplo para default Props */}
        {/* <FirstApp  /> */}

        <CounterApp value={ 27 }/>

    </React.StrictMode>
)
