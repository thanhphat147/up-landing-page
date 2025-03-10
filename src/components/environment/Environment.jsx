import React from "react";
import { Container } from "react-bootstrap";
import "../environment/environment.css";
import Slider from "react-slick";
import { listEnvironment } from "../../constants";

const Environment = () => {
  const settings = {
    swipeToSlide: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: true,
    centerMode: true,
    dots: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          centerMode: false,
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="section-environment" id="environment">
      <Container className="environment-heading">
        <h3>Không gian học thoải mái</h3>
      </Container>
      <Container className="slider-container">
        <Slider {...settings}>
          {listEnvironment.map((fadeImage, index) => (
            <div className="environment-item" key={index}>
              <div>
                <img src={fadeImage.url} />
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Environment;
