import React from 'react'
import Nav from './Nav'

// Header component
const Header = ({ currentPage }) => {
    console.log(currentPage)
    return (
        <header>
            <h1></h1>
            <Nav currentPage={currentPage}  />
        </header>
    )
}

// allows for the hover feature
<a className="nav-link" href="#home"></a>

export default Header;