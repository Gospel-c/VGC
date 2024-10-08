import "./footer.css"
import dot from "../../assets/img/imgBg.png"
import solarTicket from "../../assets/img/solar_ticket-bold-duotone.png"
import arrowUp from "../../assets/img/arrow-up-line.png"
import arrowWhite from "../../assets/img/arrow-white.png"
import footerLogo from "../../assets/img/footer-logo.png"
import { useEffect, useState } from "react"
import ParentsBtn from "../parentBtn/parentBtn"

function Footer({ about, speakers, past }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
    const scrollToSection = (elementRef) => {
        window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: "smooth",
         });
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
                    <div className="footer-links">
                        <ul>
                            <li onClick={() => scrollToSection(about)}>
                                <p>About us</p> 
                                <div>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.8525 0.914012C11.8525 0.673729 11.757 0.443298 11.5871 0.273393C11.4172 0.103487 11.1868 0.00801858 10.9465 0.00798231L3.69697 0.00798281C3.57666 0.00589174 3.45714 0.0277816 3.34539 0.0723751C3.23363 0.116969 3.13187 0.183373 3.04606 0.267713C2.96024 0.352053 2.89208 0.45264 2.84555 0.563604C2.79902 0.674569 2.77505 0.793688 2.77505 0.914013C2.77505 1.03434 2.79902 1.15346 2.84555 1.26442C2.89208 1.37539 2.96024 1.47597 3.04606 1.56031C3.13187 1.64465 3.23363 1.71106 3.34539 1.75565C3.45714 1.80024 3.57666 1.82213 3.69697 1.82004L8.75895 1.82004L0.273405 10.3056C0.103466 10.4755 0.0079942 10.706 0.0079942 10.9463C0.00799386 11.1867 0.103466 11.4172 0.273405 11.5871C0.443344 11.757 0.67383 11.8525 0.914161 11.8525C1.15449 11.8525 1.38498 11.757 1.55492 11.5871L10.0405 3.10156L10.0405 8.16354C10.0446 8.4011 10.1419 8.62754 10.3113 8.79409C10.4808 8.96063 10.7089 9.05396 10.9465 9.05396C11.1841 9.05396 11.4122 8.96063 11.5817 8.79409C11.7511 8.62755 11.8484 8.4011 11.8525 8.16354L11.8525 0.914012Z" fill="white"/>
                                    </svg>
                                </div>
                            </li>
                            <li onClick={() => scrollToSection(speakers)}>
                                <p>Speakers</p> 
                                <div>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.8525 0.914012C11.8525 0.673729 11.757 0.443298 11.5871 0.273393C11.4172 0.103487 11.1868 0.00801858 10.9465 0.00798231L3.69697 0.00798281C3.57666 0.00589174 3.45714 0.0277816 3.34539 0.0723751C3.23363 0.116969 3.13187 0.183373 3.04606 0.267713C2.96024 0.352053 2.89208 0.45264 2.84555 0.563604C2.79902 0.674569 2.77505 0.793688 2.77505 0.914013C2.77505 1.03434 2.79902 1.15346 2.84555 1.26442C2.89208 1.37539 2.96024 1.47597 3.04606 1.56031C3.13187 1.64465 3.23363 1.71106 3.34539 1.75565C3.45714 1.80024 3.57666 1.82213 3.69697 1.82004L8.75895 1.82004L0.273405 10.3056C0.103466 10.4755 0.0079942 10.706 0.0079942 10.9463C0.00799386 11.1867 0.103466 11.4172 0.273405 11.5871C0.443344 11.757 0.67383 11.8525 0.914161 11.8525C1.15449 11.8525 1.38498 11.757 1.55492 11.5871L10.0405 3.10156L10.0405 8.16354C10.0446 8.4011 10.1419 8.62754 10.3113 8.79409C10.4808 8.96063 10.7089 9.05396 10.9465 9.05396C11.1841 9.05396 11.4122 8.96063 11.5817 8.79409C11.7511 8.62755 11.8484 8.4011 11.8525 8.16354L11.8525 0.914012Z" fill="white"/>
                                    </svg>
                                </div>
                            </li>
                            <li onClick={() => scrollToSection(past)}>
                                <p>Past events</p> 
                                <div>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.8525 0.914012C11.8525 0.673729 11.757 0.443298 11.5871 0.273393C11.4172 0.103487 11.1868 0.00801858 10.9465 0.00798231L3.69697 0.00798281C3.57666 0.00589174 3.45714 0.0277816 3.34539 0.0723751C3.23363 0.116969 3.13187 0.183373 3.04606 0.267713C2.96024 0.352053 2.89208 0.45264 2.84555 0.563604C2.79902 0.674569 2.77505 0.793688 2.77505 0.914013C2.77505 1.03434 2.79902 1.15346 2.84555 1.26442C2.89208 1.37539 2.96024 1.47597 3.04606 1.56031C3.13187 1.64465 3.23363 1.71106 3.34539 1.75565C3.45714 1.80024 3.57666 1.82213 3.69697 1.82004L8.75895 1.82004L0.273405 10.3056C0.103466 10.4755 0.0079942 10.706 0.0079942 10.9463C0.00799386 11.1867 0.103466 11.4172 0.273405 11.5871C0.443344 11.757 0.67383 11.8525 0.914161 11.8525C1.15449 11.8525 1.38498 11.757 1.55492 11.5871L10.0405 3.10156L10.0405 8.16354C10.0446 8.4011 10.1419 8.62754 10.3113 8.79409C10.4808 8.96063 10.7089 9.05396 10.9465 9.05396C11.1841 9.05396 11.4122 8.96063 11.5817 8.79409C11.7511 8.62755 11.8484 8.4011 11.8525 8.16354L11.8525 0.914012Z" fill="white"/>
                                    </svg>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="call-to-action">
                        <p>Islam is the religion of seeking beneficial kmowledge</p>
                        <ParentsBtn/>
                    </div>
                </div>
                <p className="bottom-text">Tech by ZEDEF Tech © 2024 VGCIC Teen Talk Room. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer;