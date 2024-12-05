import "./about.css";
import about1 from "../../assets/img/about1.png";
import about2 from "../../assets/img/about2.png";
import vector1 from "../../assets/img/Vector.png";
import vector2 from "../../assets/img/Vector1.png";
import dot from "../../assets/img/imgBg.png"


function About({about}) {
   return (
    <div ref={about} className="about-container">
    <div className="images">
        <img src={about1} alt="" />
        <img src={about2} alt="" />
        <div className="vector1"><img src={vector1} alt="" /></div>
        <div className="vector2"><img src={vector2} alt="" /></div>
    </div>
    <div className="text">
        <h1 className="heading">We are VGCIC <span>Teen Talk Room</span></h1>
        <p className="paragraph">
            VGCIC Teen Talk Room is a community event designed for teenagers and pre-teens to deepen their understanding of Islam, learn life skills and grow religiously. It's a safe and supportive space where young pre-teens and teens can;
        </p>
        <div className="list">
            <div><img src={dot} alt="" /> <p>Connect with like-minded peers</p></div>
            <div><img src={dot} alt="" /> <p>Learn from inspiring talks and discussions</p></div>
            <div><img src={dot} alt="" /> <p>Participate in engaging activities and workshops</p></div>
            <div><img src={dot} alt="" /> <p>Receive mentorship and guidance.</p></div>
        </div>
    </div>
</div>
   )
}

export default About;