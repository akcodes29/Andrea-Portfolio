import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Home from './Components/Home.jsx';
import AboutMe from './Components/AboutMe.jsx';
import Resume from './Components/Resume.jsx';
import Portfolio from './Components/Portfolio.jsx';
import Contact from './Components/Contact.jsx';
import ThankYou from './Components/ThankYou.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  children:[
    {
      index: true,
      element: <Home />
    },
    {
      path: "about",
      element: <AboutMe />
    },
    {
      path: "resume",
      element: <Resume />
    },
    {
      path: "portfolio",
      element: <Portfolio />
    },
    {
      path: "contact",
      element: <Contact />
    },
    {
      path: "thankyou",
      element: <ThankYou />
    }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
