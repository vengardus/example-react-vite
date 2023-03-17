import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './assets/css/styles.css'
import { ChakraProvider } from '@chakra-ui/react'
import { LaunchList } from "./components/launches/LaunchList";
import { ErrorPage } from "./components/errors/errorPage";
import { LaunchDetail } from "./components/launches/LaunchDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LaunchList />,
        errorElement: <ErrorPage />,
        
    },
    {
        path: "launch/:id",
        element: <LaunchDetail />,
        errorElement: <ErrorPage />,
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>
)
