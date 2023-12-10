import React from 'react'


const Nav = ({currentPage}) => {
    return (
        <div className='Nav'>
            <nav className="nav navbar">
                <li className="nav-item">
                    <a
                        href="/"
                     
                        className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                    >
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="/about"
                        
                        className={currentPage === '/about' ? 'nav-link active' : 'nav-link'}
                    >
                        About Me
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="/resume"
                       
                        className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="/portfolio"
                       
                        className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="/contact"
                        
                        className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
            </nav>
        </div>
    )
}

export default Nav;