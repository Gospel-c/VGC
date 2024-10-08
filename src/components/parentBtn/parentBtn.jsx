
import solarTicket from "../../assets/img/solar_ticket-bold-duotone.png"
import arrowUp from "../../assets/img/arrow-up-line.png"
import "./parentBtn.css";
import { useEffect, useState } from "react";
function ParentsBtn() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
            <button className="parents-cta-btn1">{isMobile ? 'Sponsor' : 'Sponsor this Event'} <img className="parents-cta-btn1-img" src={arrowUp} alt="" /></button>
            <button className="parents-cta-btn2">Get Your Ticket! <img className="parents-cta-btn2-img" src={solarTicket} alt="" /></button>
        </div>
    )
}

export default ParentsBtn;