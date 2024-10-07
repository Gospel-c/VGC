import three from "../../assets/img/three.png"
import sixty from "../../assets/img/sixty.png"
import five from "../../assets/img/five.png"
import "./attendees.css";

function Attendees() {
    return (
        <div className="attendees">
            <img src={three} alt="" />
            <img src={sixty} alt="" />
            <img src={five} alt="" />
        </div>
    )
}

export default Attendees;