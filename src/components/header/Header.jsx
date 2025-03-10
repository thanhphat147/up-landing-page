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
    responsive: [
      {
        breakpoint: 800,
        settings: {
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="slide-img-container" id="home">
      <Slider {...settings}>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-slide" key={index}>
            <div>
              <img src={fadeImage.url} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Header;
