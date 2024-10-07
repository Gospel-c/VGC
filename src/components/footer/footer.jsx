import "./footer.css"
import dot from "../../assets/img/imgBg.png"
import solarTicket from "../../assets/img/solar_ticket-bold-duotone.png"
import arrowUp from "../../assets/img/arrow-up-line.png"
import arrowWhite from "../../assets/img/arrow-white.png"
import footerLogo from "../../assets/img/footer-logo.png"

function Footer({ about, speakers, past }) {

    const scrollToSection = (elementRef) => {
        window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: "smooth",
         });
        };
    

    return (
        <>
            <div className="banner-container">
                <p className="banner">VGC Islamic Community <span><img src={dot} alt="" /></span> Get your tickets now <span><img src={dot} alt="" /></span> Don’t miss this years Tech edition <span><img src={dot} alt="" /></span> VGCIC Teen Talk Room </p>
            </div>
            <div className="footer">
                <div className="footer-contents">
                    <div className="image-container">
                        <img src={footerLogo} alt="" />
                        <p>Deepen your understanding of Islam</p>
                    </div>
                    <div className="nav-links">
                        <ul>
                            <li onClick={() => scrollToSection(about)}><p>About us</p> <div><img src={arrowWhite} alt="" /></div></li>
                            <li onClick={() => scrollToSection(speakers)}><p>Speakers</p> <div><img src={arrowWhite} alt="" /></div></li>
                            <li onClick={() => scrollToSection(past)}><p>Past events</p> <div><img src={arrowWhite} alt="" /></div></li>
                        </ul>
                    </div>
                    <div className="call-to-action">
                        <p>Islam is the religion of seeking beneficial kmowledge</p>
                        <div className="cta-parents">
                            <button className="parents-cta-btn1">Sponsor this Event <img className="parents-cta-btn1-img" src={arrowUp} alt="" /></button>
                            <button className="parents-cta-btn2">Get Your Ticket! <img className="parents-cta-btn2-img" src={solarTicket} alt="" /></button>
                        </div>
                    </div>
                </div>
                <p className="bottom-text">Tech by ZEDEF Tech © 2024 VGCIC Teen Talk Room. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer;