import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import './assets/css/styles.css'
import { ChakraProvider } from '@chakra-ui/react'
import { router } from "./router";
// import { ThemeProvider } from "./hooks/useTheme";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        
            <ChakraProvider>
                <RouterProvider router={router} />
            </ChakraProvider>
        
    </React.StrictMode>
)
