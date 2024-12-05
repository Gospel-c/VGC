import talkRoom from "../../assets/img/talk-room.png"
import vgcic from "../../assets/img/vgcic.png"
import star from "../../assets/img/solar_star-bold.png"
import dot from "../../assets/img/dot.png"
import solarTicket from "../../assets/img/solar-ticket.png"
import arrowUp from "../../assets/img/arrow-up-line.png"
import "./hero.css"
import { useEffect, useState } from "react"

function Hero() {
    const [isMobile, setIsMobile] = useState(false); 

    const handleClick = () => {
        window.open(
          'https://mail.google.com/mail/?view=cm&fs=1&to=vgcicteentalkroom@gmail.com',
          '_blank' // This specifies to open in a new tab or window
        );
      };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value
    return () => window.removeEventListener('resize', handleResize);
  }, []);
    return (
      <header className="hero">
        <div className="edition">
            <img className="star" src={star} alt="star icon"/>
            <p className="edition-text">11th Edition coming up 29th Dec 2024</p>
            <img className="star" src={star} alt="star icon" />
        </div>
        {/* <img className="vgcic" src={vgcic} /> */}
        <div className="vgcic-con">
            <p className="vgcic">VGCIC</p>
            <img className="talk-room" src="./techh.svg" />
        </div>
        <p className="points">Islam <span><img src={dot} alt="" /></span> Deen <span><img src={dot} alt="" /></span> Growth <span><img src={dot} alt="" /></span> Skills <span><img src={dot} alt="" /></span><br /> Impact <span><img src={dot} alt="" /></span> Learn <span><img src={dot} alt="" /></span> Leaders <span><img src={dot} alt="" /></span> Tech</p>
        <div className="cta">
            <a onClick={handleClick} href="https://mail.google.com/mail/?view=cm&fs=1&to=vgcicteentalkroom@gmail.com" target="_blank" rel="noopener noreferrer"><button className="cta-btn1">{isMobile ? 'To sponsor' : 'Sponsor this event'} <img className="cta-btn1-img" src={arrowUp} alt="" /></button></a>
            <a href="https://tix.africa/discover/vgcicteens" target="_blank">
            <button className="cta-btn2">Get Your Ticket! <img className="cta-btn2-img" src={solarTicket} alt="" /></button>
            </a>
        </div>
        {/* <div className="mt-8">
            <div className="flex overflow-x-scroll space-x-4 p-4"> */}
            {/* Horizontal scroll for images */}
            {/* {Array(6).fill(0).map((_, index) => (
                <img
                key={index}
                src={`image${index + 1}.png`}
                alt="Event"
                className="w-60 h-40 object-cover rounded-lg shadow-lg"
                />
            ))} */}
            {/* </div> */}
        {/* </div> */}
    </header>
    )
}

export default Hero;