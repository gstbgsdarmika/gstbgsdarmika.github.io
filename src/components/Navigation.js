import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Navigation() {
  const [navbar, setNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const changeBackgroundNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackgroundNavbar);
  return (
    <nav className={navbar ? 'navbar navbar-scroll fixed-top' : 'navbar fixed-top'}>
      <div className="container-fluid px-md-5 d-flex align-items-center justify-content-between">
        <div className="navbar-brand d-flex align-items-center">
          <img src="images/logo.svg" alt="logo tahapan belajar" />
          <h1 className="m-2">Tahapan Belajar</h1>
        </div>
        <ul className={isMobile ? 'nav-links-mobile' : 'd-md-flex navbar-navigation mt-lg-3 gap-4'} onClick={() => setIsMobile(false)} role="menu" aria-hidden="true">
          <li className="navbar-item">
            <NavLink to="/" className={(navData) => (navData.isActive ? 'navbar-link active' : 'navbar-link')}>Home</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/project" className={(navData) => (navData.isActive ? 'navbar-link active' : 'navbar-link')}>Project</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/contact" className={(navData) => (navData.isActive ? 'navbar-link active' : 'navbar-link')}>Contact</NavLink>
          </li>
        </ul>
        <button className="menu-button" type="button" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
