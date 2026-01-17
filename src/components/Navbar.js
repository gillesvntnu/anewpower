// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { scrollToSection } from './pages/Home';


function Navbar() {
  const [click, setclick] = useState(false);

  const handleClick = () => setclick(!click);

  const closeMobileMenu = () => setclick(false);


  const scrollTo = (sectionId) => {
    scrollToSection(sectionId);
  };

  const handleHomeClick = () => {
    closeMobileMenu();
    scrollTo('titleSection');
  };

  return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={handleHomeClick}>
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
  );
}

export default Navbar;