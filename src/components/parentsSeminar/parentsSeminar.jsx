import patternTop from "../../assets/img/top-image.png";
import patternBottom from "../../assets/img/bottom-image.png";
import teenTalk from "../../assets/img/parents-img.png";
import "./parentsSeminar.css";
import ParentsBtn from "../parentBtn/parentBtn";
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
            <ParentsBtn />
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