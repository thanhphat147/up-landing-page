import React from "react";
import { Container } from "react-bootstrap";
import "../activity/activities.css";
import Slider from "react-slick";
import { listActivities } from "../../constants";

const Activities = () => {
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
        breakpoint: 1000,
        settings: {
          centerMode: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="section-activities" id="activity">
      <Container className="activity-heading">
        <h3>Hoạt Động Vui Nhộn & Sáng Tạo</h3>
      </Container>
      <Container className="slider-container">
        <Slider {...settings}>
          {listActivities.map((fadeImage, index) => (
            <div className="activity-item" key={index}>
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

export default Activities;
