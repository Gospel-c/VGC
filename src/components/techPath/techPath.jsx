import patternTop from "../../assets/img/top-img.png";
import patternBottom from "../../assets/img/bottom.png";
import teenTalk from "../../assets/img/talk-room.png";
import solarTicket from "../../assets/img/solar-ticket.png"
import arrowUp from "../../assets/img/arrow-up-line.png"
import "./techPath.css";
function TechPath() {
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
                <button className="tech-cta-btn1">Sponsor this Event <img className="tech-cta-btn1-img" src={arrowUp} alt="" /></button>
                <button className="tech-cta-btn2">Get Your Ticket! <img className="tech-cta-btn2-img" src={solarTicket} alt="" /></button>
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