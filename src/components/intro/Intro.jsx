// import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../intro/intro.css";
import { dataHeading } from "../../constants";
import { headingLine } from "../../utils";

const Intro = () => {
  return (
    <div className="section-intro" id="intro">
      <Container className="intro-heading">
        <h1>
          dạy <em>thật</em> học <em>thật</em>
        </h1>
        <img src={headingLine} alt="" />
        <p>{dataHeading}</p>
      </Container>
      <Container>
        <Row>
          <Col className="service-card">
            <div className="service-item first-service">
              <div className="icon"></div>
              <h4>CHƯƠNG TRÌNH ĐA DẠNG VÀ TOÀN DIỆN</h4>
              <p>
                You are allowed to use the Chain App Dev HTML template. Feel
                free to modify or edit this layout.
              </p>
            </div>
          </Col>
          <Col>
            <div className="service-item second-service">
              <div className="icon"></div>
              <h4>PHƯƠNG PHÁP GIẢNG DẠY LINH HOẠT</h4>
              <p>
                You are allowed to use the Chain App Dev HTML template. Feel
                free to modify or edit this layout.
              </p>
            </div>
          </Col>
          <Col>
            <div className="service-item third-service">
              <div className="icon"></div>
              <h4>CAM KẾT CHẤT LƯỢNG ĐẦU RA</h4>
              <p>
                You are allowed to use the Chain App Dev HTML template. Feel
                free to modify or edit this layout.
              </p>
            </div>
          </Col>
          <Col>
            <div className="service-item fourth-service">
              <div className="icon"></div>
              <h4>GIÁO VIÊN DÀY DẶN KINH NGHIỆM</h4>
              <p>
                You are allowed to use the Chain App Dev HTML template. Feel
                free to modify or edit this layout.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
