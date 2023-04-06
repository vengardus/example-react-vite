import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./components/errors/errorPage";
import { Calculator } from "./components/calculator/Calculator";
import { Blog } from "./components/blog/Blog";
import { UserProvider } from "./components/blog/UserContext";
import { Goal } from "./components/goal/Goal";
import Alice01 from "./containers/pages/alice01";
import Alice02 from "./containers/pages/alice02";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { LaunchesPage } from "./pages/LaunchesPage";
import { HomePage } from "./pages/HomePage";
import { LaunchDetailPage } from "./pages/LaunchDetailPage";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
        
    },
    {
        path: "launches",
        element: <LaunchesPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "launch/:id",
        element: <LaunchDetailPage />,
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
        path: "products",
        element: <ProductsPage />,
    },
    {
        path: "product/:id",
        element: <ProductDetailPage/>,
        errorElement: <ErrorPage />,
    },
]);