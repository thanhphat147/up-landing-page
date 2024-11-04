import React from "react";
import "../footer/footer.css";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { apiKey } from "../../constants";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-info" id="contact">
        <Container>
          {/* <Row>
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
          </Row> */}
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      <div className="contact-item">
                        <h4>UP Phú Cường</h4>
                        <p>
                          82 Ngô Chí Quốc, Phú Cường, Thủ Dầu Một, Bình Dương
                        </p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      <div className="contact-item">
                        <h4>UP Phú Hòa</h4>
                        <p>
                          97, đường D1, khu dân cư Phú Hòa 1, TP. Thủ Dầu Một,
                          Bình Dương
                        </p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <APIProvider apiKey={apiKey}>
                      <Map
                        style={{ width: "1000px", height: "400px" }}
                        defaultCenter={{ lat: 10.9844625, lng: 106.651017 }}
                        defaultZoom={14}
                        mapId={"e992788f54c31984"}
                      />
                    </APIProvider>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <APIProvider apiKey={apiKey}>
                      <Map
                        style={{ width: "1000px", height: "400px" }}
                        center={{ lat: 10.9741243, lng: 106.6767308 }}
                        zoom={14}
                        mapId={"e992788f54c31984"}
                      />
                    </APIProvider>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
      <div>
        <p>Copyright © 2024 UP English. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
