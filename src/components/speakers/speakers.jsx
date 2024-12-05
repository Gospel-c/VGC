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
              <img src="./ibrahim.svg" alt="" />
              <div className="speaker-name">
                <h2>Ibrahim Salami</h2>
                <p>Founder barnaamaj</p>
              </div>
            </div>
            <div className=" speaker-marquee__item">
              <img src="./fawaz.svg" alt="" />
              <div className="speaker-name">
                    <h2>Fawaz Ibrahim</h2>
                    <p>Senior Product Designer, Founder</p>
              </div>
            </div>
            <div className=" speaker-marquee__item">
              <img src="./speaker1.svg" alt="" />
              <div className="speaker-name">
                    <h2>Abdul Kabir Nasir</h2>
                    <p>Imaam Al-Jazeerah Mosque</p>
              </div>
            </div>
            <div className=" speaker-marquee__item">
              <img src="./speaker2.svg" alt="" />
              <div className="speaker-name">
                    <h2>Yasmeen-Samiat Adebisi</h2>
                    <p>Product Designer MTN</p>
              </div>
            </div>
            <div className=" speaker-marquee__item">
              <img src="./speaker3.svg" alt="" />
              <div className="speaker-name">
                    <h2>Abdulqadir Adebayo</h2>
                    <p>Founder Nexstack</p>
              </div>
            </div>
            <div className=" speaker-marquee__item">
              <img src="./speaker4.svg" alt="" />
              <div className="speaker-name">
                    <h2>Aisha Ola-Mudathir</h2>
                    <p>Founder MINT.</p>
              </div>
            </div>
            <div className=" speaker-marquee__item">
              <img src="./speaker5.svg" alt="" />
              <div className="speaker-name">
                    <h2>Abdullah Mumuni</h2>
                    <p>Chairman Muslim Tech Expo</p>
              </div>
            </div>
          </ul>

          <ul aria-hidden="true" className="speaker-marquee__content">
            <div className=" speaker-marquee__item">
              <img src="./ibrahim.svg" alt="" />
              <div className="speaker-name">
                    <h2>Ibrahim Salami</h2>
                    <p>Founder barnaamaj</p>
              </div>
            </div>
            <div className=" speaker-marquee__item">
              <img src="./fawaz.svg" alt="" />
              <div className="speaker-name">
                    <h2>Fawaz Ibrahim</h2>
                    <p>Senior Product Designer, Founder</p>
              </div>
            </div>
            <div className=" speaker-marquee__item">
              <img src="./speaker1.svg" alt="" />
              <div className="speaker-name">
                    <h2>Abdul Kabir Nasir</h2>
                    <p>Imaam Al-Jazeerah Mosque</p>
              </div>
            </div>
            <div className=" speaker-marquee__item">
              <img src="./speaker2.svg" alt="" />
              <div className="speaker-name">
                    <h2>Yasmeen-Samiat Adebisi</h2>
                    <p>Product Designer MTN</p>
              </div>
            </div>
            <div className=" speaker-marquee__item">
              <img src="./speaker3.svg" alt="" />
              <div className="speaker-name">
                    <h2>Abdulqadir Adebayo</h2>
                    <p>Founder Nexstack</p>
              </div>
            </div>
            <div className=" speaker-marquee__item">
              <img src="./speaker4.svg" alt="" />
              <div className="speaker-name">
                    <h2>Aisha Ola-Mudathir</h2>
                    <p>Founder MINT.</p>
              </div>
            </div>
            <div className=" speaker-marquee__item">
              <img src="./speaker5.svg" alt="" />
              <div className="speaker-name">
                    <h2>Abdullah Mumuni</h2>
                    <p>Chairman Muslim Tech Expo</p>
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