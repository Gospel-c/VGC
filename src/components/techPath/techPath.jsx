import patternTop from "../../assets/img/top-img.png";
import patternBottom from "../../assets/img/bottom.png";
import teenTalk from "../../assets/img/talk-room.png";
import solarTicket from "../../assets/img/solar-ticket.png"
import arrowUp from "../../assets/img/arrow-up-line.png"
import "./techPath.css";
import { useEffect, useState } from "react";
function TechPath() {
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
        <div className="tech-path">
            <img className="talk" src={teenTalk} alt="header" />
            <h2>Learn any of these tech paths in our Tech Edition</h2>
            <div className="paths">
                <div>Product Design</div>
                <div>Data Science</div>
                <div>Web Development</div>
                <div>Project Management</div>
            </div>
            <div className="cta-tech">
                <a href="mailto:vgcicteentalkroom@gmail.com" target="_blank" rel="noopener noreferrer"><button className="tech-cta-btn1">{isMobile ? 'Sponsor' : 'Sponsor this Event'} <img className="tech-cta-btn1-img" src={arrowUp} alt="" /></button></a>
                <a href="https://tix.africa/discover/vgcicteens" target="_blank"><button className="tech-cta-btn2">Get Your Ticket! <img className="tech-cta-btn2-img" src={solarTicket} alt="" /></button></a>
            </div>
            <img
                src={patternTop}
                alt="Decorative Pattern"
                className="hidden-image1"
            />
            <img
                src={patternBottom}
                alt="Decorative Pattern"
                className="hidden-image2"
            />
        </div>
    )
}

export default TechPath;