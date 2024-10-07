import './navbar.css';
import logo from '../../assets/img/logo.png';
import solar_ticket from '../../assets/img/solar_ticket-bold-duotone.png';
import menu_icon from '../../assets/img/menu-icon.png';
import close from '../../assets/img/Close.svg';
import { useState } from 'react';

function Navbar({ about, speakers, past }) {
  const [navbar, setNavbar] = useState(false);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
     });
    };

  return (
  <nav>
    <div className='logo'>
        <img className='logo-img' src={logo} alt="logo" />
    </div>
    <div className='menu-items'>
        <ul>
            <li onClick={() => scrollToSection(about)}>About</li>
            <li onClick={() => scrollToSection(speakers)}>Speakers</li>
            <li onClick={() => scrollToSection(past)}>Past Events</li>
        </ul>
    </div>
    <div className='right'>
        <p>Get Your Ticket!</p><img className='icon' src={solar_ticket}></img>
    </div>
    <div className="responsive-menu">
          <button
            className="menu-icon"
            onClick={() => setNavbar(!navbar)}
        >
            {navbar ? (
                <img src={close} width={30} height={30} className="menu-icon" alt="close" />
            ) : (
                <img
                    src={menu_icon}
                    width={30}
                    height={30}
                    alt="hamburger"
                    className="menu-icon"
                />
            )}
        </button>
    </div>
    {
      navbar && (
        <div className="hamburger">
            <button
                className="hamburger-button"
                onClick={() => setNavbar(false)}
            >
                <img src={close} width={30} height={30} alt="close" />
            </button>
            <div className='hamburger-items'>
                <ul>
                    <li>About</li>
                    <li>Speakers</li>
                    <li>Past Events</li>
                </ul>
            </div>
            <div className='hamburger-right'>
              <p>Get Your Ticket!</p><img className='icon' src={solar_ticket}></img>
            </div>  
        </div>
      )
    }
  </nav>
  )
}

export default Navbar;
