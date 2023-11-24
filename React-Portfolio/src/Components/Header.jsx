import React from 'react'
import Nav from './Nav'

// Header component
const Header = ({ currentPage, handlePageChange }) => {
    console.log(currentPage)
    return (
        <header>
            <h1></h1>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    )
}

// allows for the hover feature
<a className="nav-link" href="#home"></a>

export default Header;