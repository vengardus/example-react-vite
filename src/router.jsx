import { createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from './components/errors/errorPage'
import { ProductsPage } from './pages/ProductsPage'
import { LaunchesPage } from './pages/LaunchesPage'
// import { HomePage } from './pages/HomePage'
import { LaunchDetailPage } from './pages/LaunchDetailPage'
import { CalculatorPage } from './pages/CalculatorPage'
import { BlogPage } from './pages/BlogPage'
import { GoalsPage } from './pages/GoalsPage'
import { Alice01Page } from './pages/Alice01Page'
import { Alice02Page } from './pages/Alice02Page'
import { PortafolioPage } from './pages/PortafolioPage'
import { TictactoePage } from './pages/TictactoePage'
import { FollowMousePage } from './pages/FollowMousePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PortafolioPage />,
    errorElement: <ErrorPage />

  },
  {
    path: '/launches',
    element: <LaunchesPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/launch/:id',
    element: <LaunchDetailPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/calculator',
    element: <CalculatorPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/blog',
    element: <BlogPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/goals',
    element: <GoalsPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/alice01',
    element: <Alice01Page />,
    errorElement: <ErrorPage />
  },
  {
    path: '/alice02',
    element: <Alice02Page />
  },
  {
    path: '/products',
    element: <ProductsPage />
  },
  {
    path: '/portafolio',
    element: <PortafolioPage />
  },
  {
    path: '/tictactoe',
    element: <TictactoePage />
  },
  {
    path: '/followmouse',
    element: <FollowMousePage />
  }

])
