
import solarTicket from "../../assets/img/solar_ticket-bold-duotone.png"
import arrowUp from "../../assets/img/arrow-up-line.png"
import "./parentBtn.css";
import { useEffect, useState } from "react";
function ParentsBtn() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const handleClick = () => {
      window.open(
        'https://mail.google.com/mail/?view=cm&fs=1&to=vgcicteentalkroom@gmail.com',
        '_blank' // This specifies to open in a new tab or window
      );
    };

     // Function to detect screen resize and check if it's mobile
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  // useEffect to add event listener for resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
    return (
        <div className="cta-parents">
            <a onClick={handleClick} href="mailto:vgcicteentalkroom@gmail.com" target="_blank" rel="noopener noreferrer"><button className="parents-cta-btn1">{isMobile ? 'To Sponsor' : 'Sponsor this Event'} <img className="parents-cta-btn1-img" src={arrowUp} alt="" /></button></a>
            <a href="https://tix.africa/discover/vgcicteens" target="_blank"><button className="parents-cta-btn2">Get Your Ticket! <img className="parents-cta-btn2-img" src={solarTicket} alt="" /></button></a>
        </div>
    )
}

export default ParentsBtn;