import logo from '../../assets/img/logo.png';
import solar_ticket from '../../assets/img/solar_ticket-bold-duotone.png';
import { useState } from "react";
import "./navbar.css"; 

const Navbar = ({ about, speakers, past }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
     });
    };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="https://vgcicteentalkroom.org/"><img className='logo-img' src={logo} alt="logo" /></a>
      </div>
      
      <div className={`nav-menu-container ${isMenuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li onClick={() => scrollToSection(about)}>About</li>
          <li onClick={() => scrollToSection(speakers)}>Speakers</li>
          <li onClick={() => scrollToSection(past)}>Past Events</li>
        </ul>

        <a href="https://tix.africa/vgcicteens" target='_blank'>
          <button className="nav-button">
            <p>Get Your Ticket!</p><img className='icon' src={solar_ticket}></img>
          </button>
        </a>
      </div>

      <div className="hamburger-icon" onClick={toggleMenu}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.535714" y="0.535714" width="28.9286" height="28.9286" rx="9.10714" fill="#FFD7FE"/>
          <rect x="0.535714" y="0.535714" width="28.9286" height="28.9286" rx="9.10714" stroke="#8A2488" strokeWidth="1.07143"/>
          <path d="M9 9H21.5" stroke="#8A2488" strokeWidth="0.833333" strokeLinecap="round"/>
          <path d="M9 15H21.5" stroke="#8A2488" strokeWidth="0.833333" strokeLinecap="round"/>
          <path d="M9 21H21.5" stroke="#8A2488" strokeWidth="0.833333" strokeLinecap="round"/>
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
