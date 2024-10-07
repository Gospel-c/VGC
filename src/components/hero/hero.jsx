import talkRoom from "../../assets/img/talk-room.png"
import vgcic from "../../assets/img/vgcic.png"
import star from "../../assets/img/solar_star-bold.png"
import dot from "../../assets/img/dot.png"
import solarTicket from "../../assets/img/solar-ticket.png"
import arrowUp from "../../assets/img/arrow-up-line.png"
import "./hero.css"

function Hero() {
    return (
      <header className="hero">
        <div className="edition">
            <img className="star" src={star} alt="star icon"/>
            <p className="edition-text">12th Edition coming up in 110 days</p>
            <img className="star" src={star} alt="star icon" />
        </div>
        <img className="vgcic" src={vgcic} />
        <img className="talk-room" src={talkRoom} />
        <p className="points">Islam <span><img src={dot} alt="" /></span> Deen <span><img src={dot} alt="" /></span> Grow <span><img src={dot} alt="" /></span> Skills <span><img src={dot} alt="" /></span><br /> Impact <span><img src={dot} alt="" /></span> Learn <span><img src={dot} alt="" /></span> Leaders <span><img src={dot} alt="" /></span> Tech</p>
        <div className="cta">
            <button className="cta-btn1">Sponsor <img className="cta-btn1-img" src={arrowUp} alt="" /></button>
            <button className="cta-btn2">Get Your Ticket! <img className="cta-btn2-img" src={solarTicket} alt="" /></button>
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