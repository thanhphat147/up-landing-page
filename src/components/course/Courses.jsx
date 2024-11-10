import React from "react";
import "../course/courses.css";
import { Col, Container, Row } from "react-bootstrap";
import { courseContent } from "../../constants";

const Courses = () => {
  return (
    <div className="section-courses" id="courses">
      <Container>
        <Row>
          {courseContent.map((course, index) => (
            <Col key={index}>
              <div
                className="card"
                style={{ backgroundImage: `url(${course.courseImgUrl})` }}
              >
                <div className="card-content">
                  <h4 className="course-header">{course.courseHeader}</h4>
                  <div className="card-body">
                    <p className="course-title">{course.courseTitle}</p>
                  </div>
                </div>
                <div class="age-range">
                  <p>{course.ageRange}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
