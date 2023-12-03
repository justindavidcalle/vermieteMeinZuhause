import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Errorpage from './sites/Errorpage.jsx'
import Mieten from './sites/Mieten.jsx'
import SignIn from './sites/SignIn.jsx'
import Login from './sites/Login.jsx'
import About from './sites/About.jsx'

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/rent", element: <Mieten /> },
        { path: "/about", element: <About /> },
      ],
      errorElement: <Errorpage />,
    },
    {
      path: "/signIn",
      element:<SignIn />
    },
    {
      path: "/login",
      element: <Login />
    }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
