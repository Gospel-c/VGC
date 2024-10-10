import "./imgSlider.css"; // Import the CSS file
import carousel1 from "../../assets/img/frame-12.png";
import carousel2 from "../../assets/img/frame-10.png";
import carousel3 from "../../assets/img/frame-11.png";
import carousel4 from "../../assets/img/frame-14.png";

const images = [
  carousel1,  // Replace with your image paths
  carousel2,
  carousel3,
  carousel4,
];

const ImageSlider = () => {
  return (
    <div className=" main__container">
      <section className="enable-animation">
        <div className="marquee">
          <ul className="marquee__content">
            <div className=" marquee__item">
              <img src={carousel1} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={carousel2} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={carousel3} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={carousel4} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={carousel1} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={carousel2} alt="" />
            </div>
          </ul>

          <ul aria-hidden="true" className="marquee__content">
            <div className=" marquee__item">
              <img src={carousel1} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={carousel2} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={carousel3} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={carousel4} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={carousel1} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={carousel2} alt="" />
            </div>
          </ul>
        </div>
      </section>
      <div className="overlay-left"></div>
      <div className="overlay-right"></div>
    </div>
  );
  };
  
  

export default ImageSlider;
