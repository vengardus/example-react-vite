import { createBrowserRouter } from "react-router-dom";
import { LaunchList } from "./components/launches/LaunchList";
import { ErrorPage } from "./components/errors/errorPage";
import { LaunchDetail } from "./components/launches/LaunchDetail";


export const router = createBrowserRouter([
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