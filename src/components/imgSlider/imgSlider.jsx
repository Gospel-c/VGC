import "./imgSlider.css"; // Import the CSS file
import carousel1 from "../../assets/img/carousel1.png";

const images = [
  carousel1,  // Replace with your image paths
  carousel1,
  carousel1,
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
              <img src={carousel1} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={carousel1} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={carousel1} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={carousel1} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={carousel1} alt="" />
            </div>
          </ul>

          <ul aria-hidden="true" className="marquee__content">
            <div className=" marquee__item">
              <img src={carousel1} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={carousel1} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={carousel1} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={carousel1} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={carousel1} alt="" />
            </div>
            <div className=" marquee__item">
              <img src={carousel1} alt="" />
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
