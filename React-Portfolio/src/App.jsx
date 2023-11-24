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


function App() {
  const [currentPage, setCurrentPage] = useState('Home')

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />
    }
    if (currentPage === 'About Me') {
      return <AboutMe />
    }
    if (currentPage === 'Resume') {
      return <Resume />
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
    
}

const handlePageChange = (page) => setCurrentPage(page)

  return (
    <>
    <Header currentPage={currentPage} handlePageChange={handlePageChange} />
    <main>
      {renderPage()}
    </main>
    <Footer />
    </>
  )
}

export default App
