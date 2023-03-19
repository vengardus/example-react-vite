import { createBrowserRouter } from "react-router-dom";
import { LaunchList } from "./components/launches/LaunchList";
import { ErrorPage } from "./components/errors/errorPage";
import { LaunchDetail } from "./components/launches/LaunchDetail";
import { Calculator } from "./components/calculator/Calculator";
import { Blog } from "./components/blog/Blog";
import { UserProvider } from "./components/blog/UserContext";


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
    {
        path: "calculator",
        element: <Calculator />,
        errorElement: <ErrorPage />,
    },
    {
        path: "blog",
        element: <UserProvider><Blog /></UserProvider>,
        errorElement: <ErrorPage />,
    },
]);