import './banner.css';
import dot from "../../assets/img/imgBg.png"

function Banner() {
    return (
        <div className="container">
            <p className="banner">VGC Islamic Community <span><img src={dot} alt="" /></span> Get your tickets now <span><img src={dot} alt="" /></span> Don’t miss this years Tech edition <span><img src={dot} alt="" /></span> VGCIC Teen Talk Room </p>
        </div>
    )
}

export default Banner;