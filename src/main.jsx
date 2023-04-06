import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import './assets/css/styles.css'
import { ChakraProvider } from '@chakra-ui/react'
import { router } from "./router";
// import { UserProvider } from "./components/blog/UserContext";
// import { ThemeProvider } from "./hooks/useTheme";
import { Provider } from 'react-redux';
import store from './store';
import './assets/css/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <ChakraProvider>
                <RouterProvider router={router} />
            </ChakraProvider>
        </Provider>
    </React.StrictMode>
)
