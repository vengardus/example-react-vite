import { createBrowserRouter } from "react-router-dom";
import { LaunchList } from "./components/launches/LaunchList";
import { ErrorPage } from "./components/errors/errorPage";
import { LaunchDetail } from "./components/launches/LaunchDetail";
import { Calculator } from "./components/calculator/Calculator";
import { Blog } from "./components/blog/Blog";
import { UserProvider } from "./components/blog/UserContext";
import { Goal } from "./components/goal/Goal";
import Alice01 from "./containers/pages/alice01";
import Alice02 from "./containers/pages/alice02";
import { Alice03 } from "./containers/pages/alice03";
import ProductDetails from "./components/alice03/ProductDetail";



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
        element: <UserProvider course='React'><Blog /></UserProvider>,
        errorElement: <ErrorPage />,
    },
    {
        path: "goal",
        element: <Goal />,
        errorElement: <ErrorPage />,
    },
    {
        path: "alice01",
        element: <Alice01 />,
        errorElement: <ErrorPage />,
    },
    {
        path: "alice02",
        element: <Alice02 />,
    },
    {
        path: "alice03",
        element: <Alice03 />,
    },
    {
        path: "product/:id",
        element:       
        <ProductDetails />,
        errorElement: <ErrorPage />,
    },
]);