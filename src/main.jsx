import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import './assets/css/styles.css'
import { ChakraProvider } from '@chakra-ui/react'
import { router } from "./router";
// import { UserProvider } from "./components/blog/UserContext";
// import { ThemeProvider } from "./hooks/useTheme";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <UserProvider> */}
            <ChakraProvider>
                <RouterProvider router={router} />
            </ChakraProvider>
        {/* </UserProvider> */}
    </React.StrictMode>
)
