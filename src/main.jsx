import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import HistoryPage from './Pages/HistoryPage.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import MainLayout from './Layout/MainLayout.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/history",
        element: <HistoryPage />,
      },

      {
        path: "/about",
        element:<AboutPage/>,
      },
    ],

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />

  </StrictMode>,
)
