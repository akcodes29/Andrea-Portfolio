import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/quartz/bootstrap.min.css"
import './App.css'
// import Home from './Components/Home'
// import Resume from './Components/Resume'
// import Portfolio from './Components/Portfolio'
// import Contact from './Components/Contact'
// import AboutMe from './Components/AboutMe';
import Header from './Components/Header'
import Footer from './Components/Footer';
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
