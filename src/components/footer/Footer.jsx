import React, { useState } from "react";
import "../footer/footer.css";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ReactMapGL, { Marker } from "@goongmaps/goong-map-react";
import "@goongmaps/goong-js/dist/goong-js.css";

const Footer = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 450,

    zoom: 18,
  });
  return (
    <div className="footer">
      <div className="contact-info" id="contact">
        <Container>
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
                        <p>039 591 7986</p>
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
                        <p>039 250 7086</p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <ReactMapGL
                      goongApiAccessToken="zETc7rYLEJp150nCxjkw3vjm0sdRaPIlIgrNNCLz"
                      {...viewport}
                      latitude={10.9844625}
                      longitude={106.651017}
                      onViewportChange={(nextViewport) =>
                        setViewport(nextViewport)
                      }
                    >
                      <Marker latitude={10.9844625} longitude={106.651017}>
                        <img className="marker" src="/assets/icons/pin.png" />
                      </Marker>
                    </ReactMapGL>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <ReactMapGL
                      goongApiAccessToken="zETc7rYLEJp150nCxjkw3vjm0sdRaPIlIgrNNCLz"
                      {...viewport}
                      latitude={10.9740841}
                      longitude={106.6792344}
                      onViewportChange={(nextViewport) =>
                        setViewport(nextViewport)
                      }
                    >
                      <Marker latitude={10.9740841} longitude={106.6792344}>
                        <img className="marker" src="/assets/icons/pin.png" />
                      </Marker>
                    </ReactMapGL>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
      <div className="footer-copyright">
        <p>Copyright © 2024 UP English. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
