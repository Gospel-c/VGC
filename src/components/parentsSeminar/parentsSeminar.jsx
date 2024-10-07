import patternTop from "../../assets/img/top-image.png";
import patternBottom from "../../assets/img/bottom-image.png";
import teenTalk from "../../assets/img/parents-img.png";
import solarTicket from "../../assets/img/solar_ticket-bold-duotone.png"
import arrowUp from "../../assets/img/arrow-up-line.png"
import "./parentsSeminar.css";
function ParentsSeminar() {
    return (
        <div className="parents-seminar">
            <img className="talk" src={teenTalk} alt="header" />
            <h2>We don’t leave our parent out!</h2>
            <div className="parents-paths">
                <div>Child upbringing</div>
                <div>Children and Tech</div>
                <div>The Ideal Islamic home</div>
                <div>Islamic values</div>
            </div>
            <div className="cta-parents">
                <button className="parents-cta-btn1">Sponsor this Event <img className="parents-cta-btn1-img" src={arrowUp} alt="" /></button>
                <button className="parents-cta-btn2">Get Your Ticket! <img className="parents-cta-btn2-img" src={solarTicket} alt="" /></button>
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

export default ParentsSeminar;