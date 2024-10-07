import speakerImg from "../../assets/img/speaker-img.png";
import "./speakers.css"

function Speakers({speakers}) {
    return (
        <div ref={speakers} className="speaker-container">
            <h2 className="speaker-heading">Our Speakers</h2>
            <p className="speaker-paragraph">Take a look at our speakers this edition.</p>
            <div className=" speaker-carousel">
      <section className="enable-animation">
        <div className="speaker-marquee">
          <ul className="speaker-marquee__content">
            <div className=" speaker-marquee__item">
              <img src={speakerImg} alt="" />
              <div className="speaker-name">
                <h2>Fawaz Ibrahim</h2>
                <p>Senior Product Designer, Founder</p>
              </div>
            </div>
            <div className=" speaker-marquee__item">
              <img src={speakerImg} alt="" />
              <div className="speaker-name">
                    <h2>Fawaz Ibrahim</h2>
                    <p>Senior Product Designer, Founder</p>
              </div>
            </div>
            <div className=" speaker-marquee__item">
              <img src={speakerImg} alt="" />
              <div className="speaker-name">
                    <h2>Fawaz Ibrahim</h2>
                    <p>Senior Product Designer, Founder</p>
              </div>
            </div>
            <div className=" speaker-marquee__item">
              <img src={speakerImg} alt="" />
              <div className="speaker-name">
                    <h2>Fawaz Ibrahim</h2>
                    <p>Senior Product Designer, Founder</p>
              </div>
            </div>
            <div className=" speaker-marquee__item">
              <img src={speakerImg} alt="" />
              <div className="speaker-name">
                    <h2>Fawaz Ibrahim</h2>
                    <p>Senior Product Designer, Founder</p>
              </div>
            </div>
            <div className=" speaker-marquee__item">
              <img src={speakerImg} alt="" />
              <div className="speaker-name">
                    <h2>Fawaz Ibrahim</h2>
                    <p>Senior Product Designer, Founder</p>
              </div>
            </div>
          </ul>

          <ul aria-hidden="true" className="speaker-marquee__content">
            <div className=" speaker-marquee__item">
              <img src={speakerImg} alt="" />
              <div className="speaker-name">
                    <h2>Fawaz Ibrahim</h2>
                    <p>Senior Product Designer, Founder</p>
              </div>
            </div>
            <div className=" speaker-marquee__item">
              <img src={speakerImg} alt="" />
              <div className="speaker-name">
                    <h2>Fawaz Ibrahim</h2>
                    <p>Senior Product Designer, Founder</p>
              </div>
            </div>
            <div className=" speaker-marquee__item">
              <img src={speakerImg} alt="" />
              <div className="speaker-name">
                    <h2>Fawaz Ibrahim</h2>
                    <p>Senior Product Designer, Founder</p>
              </div>
            </div>
            <div className=" speaker-marquee__item">
              <img src={speakerImg} alt="" />
              <div className="speaker-name">
                    <h2>Fawaz Ibrahim</h2>
                    <p>Senior Product Designer, Founder</p>
              </div>
            </div>
            <div className=" speaker-marquee__item">
              <img src={speakerImg} alt="" />
              <div className="speaker-name">
                    <h2>Fawaz Ibrahim</h2>
                    <p>Senior Product Designer, Founder</p>
              </div>
            </div>
            <div className=" speaker-marquee__item">
              <img src={speakerImg} alt="" />
              <div className="speaker-name">
                    <h2>Fawaz Ibrahim</h2>
                    <p>Senior Product Designer, Founder</p>
              </div>
            </div>
          </ul>
        </div>
      </section>
    </div>
        </div>
    )
}

export default Speakers;