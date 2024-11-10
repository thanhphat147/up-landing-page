import React from "react";
import "../header/header.css";
import Slider from "react-slick";
import { fadeImages } from "../../constants";

const Header = () => {
  const settings = {
    swipeToSlide: true,
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    lazyLoad: true,
    arrows: false,
  };

  return (
    <div className="slide-img-container" id="home">
      <Slider {...settings}>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-slide" key={index}>
            <div>
              <img src={fadeImage.url} />
              {/* <div className="slider-content">
                <div className="slider-caption">
                  <div className="caption-title">
                    <h1>{fadeImage.title}</h1>
                  </div>
                  <div className="caption-content">
                    <p>{fadeImage.content}</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Header;
