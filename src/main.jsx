import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from '@chakra-ui/react'
// import { CounterApp } from "./components/CounterApp";
// import FirstApp from "./components/FirstApp";
import { AppLaunches } from "./components/AppLaunches";
import './assets/css/styles.css'


ReactDOM.createRoot( document.getElementById('root' ) ).render(
    <React.StrictMode>
        {/* <FirstApp name='Gardus' number={ 27 } /> */}
        {/* Ejemplo para default Props */}
        {/* <FirstApp  /> */}
        {/* <CounterApp value={ 27 }/> */}

        <ChakraProvider>
            <AppLaunches />
        </ChakraProvider>

    </React.StrictMode>
)
