import './banner.css';
import dot from "../../assets/img/imgBg.png"

function Banner() {
    return (
        <div className='banner-marquee-con'>
            <section className='animation-enabler'>
                <div className='banner-marquee'>
                    <div className="container">
                        <p className="banner">VGC Islamic Community <span><img src={dot} alt="" /></span> Get your tickets now <span><img src={dot} alt="" /></span> Don’t miss this years Tech edition <span><img src={dot} alt="" /></span> VGCIC Teen Talk Room VGC Islamic Community <span><img src={dot} alt="" /></span> Get your tickets now <span><img src={dot} alt="" /></span> Don’t miss this years Tech edition <span><img src={dot} alt="" /></span> VGCIC Teen Talk Room </p>
                        <p className="banner">VGC Islamic Community <span><img src={dot} alt="" /></span> Get your tickets now <span><img src={dot} alt="" /></span> Don’t miss this years Tech edition <span><img src={dot} alt="" /></span> VGCIC Teen Talk Room VGC Islamic Community <span><img src={dot} alt="" /></span> Get your tickets now <span><img src={dot} alt="" /></span> Don’t miss this years Tech edition <span><img src={dot} alt="" /></span> VGCIC Teen Talk Room </p>
                    </div>
                </div>
            </section>
        </div>
        
    )
}

export default Banner;