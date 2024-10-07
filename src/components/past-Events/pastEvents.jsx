import pastEdition from "../../assets/img/past-edition.png";
import topImage from "../../assets/img/top-image.png";
import bottomImage from "../../assets/img/bottom-image.png";
import "./pastEvents.css";

function PastEvents({past}) {
    return (
        <div ref={past} className="past-events">
            <h2 className="past-event__heading">Our past events</h2>
            <div className="img-container">
                <div>
                    <img src={pastEdition} alt="" />
                    <p>January Edition 2023</p>
                </div>
                <div>
                    <img src={pastEdition} alt="" />
                    <p>January Edition 2022</p>
                </div>
            </div>
        </div>
    )
}

export default PastEvents;