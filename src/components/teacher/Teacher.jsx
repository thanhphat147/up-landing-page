import React from "react";
import "../teacher/teacher.css";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { listTeacher } from "../../constants";

const Teacher = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="section-teacher" id="teachers">
      <Container className="teacher-heading">
        <h3>GIÁO VIÊN DÀY DẶN KINH NGHIỆM</h3>
      </Container>
      <Container className="teacher-frame">
        <div className="slider-teacher">
          <Slider {...settings}>
            {listTeacher.map((teacher, index) => (
              <div className="teacher-item" key={index}>
                <div>
                  <img src={teacher.teacherImgUrl} />
                </div>
                <div className="teacher-content">
                  <h4>{teacher.teacherDesc}</h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Teacher;
