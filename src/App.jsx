import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/morph/bootstrap.min.css"
import './App.css'
import Home from './Components/Home'
import Resume from './Components/Resume'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import Header from './Components/Header'
import Footer from './Components/Footer';
import AboutMe from './Components/AboutMe';
import { Outlet, useLocation } from 'react-router-dom';


function App() {
  const currentPage = useLocation().pathname

  return (
    <>
    <Header currentPage={currentPage}  />
    <main>
     <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default App
