import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Profile from './components/Profile.jsx'
import Verify from './components/Verify.jsx'
import { ToastContainer } from 'react-toastify'

const router= createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        path:"login",
        element: <Login/>
      },
      {
        path: "signup",
        element: <Signup/>
      },
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "contact-us",
        element: <Contact/>,
      },
      {
        path: "about-us",
        element: <About/>,
      },
      {
        path: "uprofile",
        element: <Profile/>
      },
      {
        path: "Verify",
        element: <Verify/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <ToastContainer position="bottom-right"
    />
  </React.StrictMode>,
)
