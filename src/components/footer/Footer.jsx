import React from "react";
import "../footer/footer.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-info" id="contact">
        <Container>
          <Row>
            <Col>
              <div className="contact-item">
                <h4>Cơ sở 1</h4>
                <p>Điện thoại cơ sở 1 + Zalo (Phú Cường): 039 591 7986</p>
                <p>
                  Địa chỉ: UP English: 82 Ngô Chí Quốc, Phú Cường, Thủ Dầu Một,
                  Bình Dương
                </p>
              </div>
            </Col>
            <Col></Col>
            <Col>
              <div className="contact-item">
                <h4>Cơ sở 2</h4>
                <p>Điện thoại cơ sở 2 + Zalo (Phú Hòa): 039 250 7086</p>
                <p>
                  Địa chỉ: UP English: 97, đường D1, khu dân cư Phú Hòa 1, TP.
                  Thủ Dầu Một, Bình Dương
                </p>
              </div>
            </Col>
            <Col>
              <div className="contact-item"></div>
            </Col>
          </Row>
        </Container>
      </div>
      <p>Copyright © 2024 UP English. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
