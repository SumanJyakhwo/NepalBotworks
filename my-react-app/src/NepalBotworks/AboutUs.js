import React from "react";
import { Button, Card, Col, Container, Row } from "reactstrap";
import "../NepalBotworks/home.css";
import photo1 from "../assets/img/Teaching.jpeg";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();
  const handleDisplay = () => {
    navigate("/about");
  };
  return (
    <div>
      <Card>
        <section>
          <Container>
            <div className="heading_container text-center">
              <h2 className="mt-3 text-heading services-heading">About Us</h2>
            </div>
            <Row>
              <Col md="6">
                <p className="text-normal">
                  We're a leading provider of cutting-edge technology education
                  and IT services. From robotics and IoT training to drone
                  technology and AI/ML expertise, we empower students and
                  businesses alike to embrace innovation. Our comprehensive
                  website development services ensure your online presence
                  stands out, driving success in the digital landscape. With a
                  focus on hands-on learning and tailored solutions, we're
                  committed to shaping the future of technology and helping you
                  thrive in an ever-evolving world.
                </p>
                <button
                  type="submit"
                  className="btn btn-danger btn-label rounded-pill mb-2"
                  onClick={handleDisplay}
                >
                  <i className="ri-mail-line label-icon align-middle rounded-pill fs-16 me-2"></i>{" "}
                  Read More....
                </button>{" "}
              </Col>
              <Col md="6">
                <div className="img_Container mb-3">
                  <div className="img-box b1 img-fluid text-right">
                    <img
                      src={photo1}
                      alt="Teaching"
                      className="rounded-circle img-fluid"
                      style={{ maxHeight: "350px", maxWidth: "300px" }}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Card>
      {/* End about section */}
    </div>
  );
}

export default AboutUs;
