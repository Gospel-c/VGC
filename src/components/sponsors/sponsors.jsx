import img from "../../assets/img/vgcic-image.png";
import "./sponsors.css"

function Sponsors() {
    return (
        <div className="sponsors">
            <h2>Our partners and Sponsors</h2>
            <div className="sponsors-img">
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default Sponsors;