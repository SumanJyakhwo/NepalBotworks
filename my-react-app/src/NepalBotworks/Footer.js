import React from "react";
import { Col, Container, Row } from "reactstrap";
import twitter from "../assets/img/twitter.png";
import telephone from "../assets/img/telephone-white.png";
import location from "../assets/img/linkedin.png";
import linkin from "../assets/img/linkedin.png";
import insta from "../assets/img/instagram.png";
import fb from "../assets/img/fb.png";
import "../NepalBotworks/home.css";
import Botwork from "../assets/img/crop.png";

function Footer() {
  return (
    <div>
      <section className="info_section layout_padding">
        <Container>
          <Row>
            <Col lg={3} sm={12}>
              <div className="fs-18 mb-1">
                <span className="text-center">
                  {" "}
                  <img
                    src={Botwork}
                    alt="Nepal Botworks"
                    className="img-fluid"
                    style={{ height: "80px", width: "80px" }}
                  />
                </span>
              </div>{" "}
              <div className="info_social">
                <a
                  href="https://www.facebook.com/profile.php?id=61557855965257"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={fb} alt="Facebook" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitter} alt="Twitter" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkin} alt="LinkedIn" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={insta} alt="Instagram" />
                </a>
              </div>
              <div className="info_social mt-4">
                <span className="text-subheading text-white  mb-3">Menu</span>
                <div>
                  <a
                    href="/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white link"
                  >
                    Home
                  </a>
                  <br />
                  <a
                    href="/about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white link"
                  >
                    About Us
                  </a>
                  <br />
                  <a
                    href="https://www.britannica.com/technology/artificial-intelligence"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white link"
                  >
                    Gallery
                  </a>
                  <br />
                  <a
                    href="contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white link"
                  >
                    Contact Us
                  </a>
                  <br />
                  <a
                    href="faq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white link"
                  >
                    FAQ
                  </a>
                </div>
              </div>
            </Col>

            <Col md="4" lg="4" sm={12}>
              <span className="text-subheading text-white mb-3">
                Contact Information
              </span>
              <h6 className="text-white">
                <span></span>Liwali-08, Bhaktapur
              </h6>

              <h6 className="text-white">Call Us: +977 9761 806 265</h6>

              <h6 className="text-white">info.nepalbotworks@gmail.com</h6>

              <div className="info_social mt-4">
                <span className="text-subheading text-white  mb-3">
                  Useful Links
                </span>
                <div>
                  <a
                    href="https://builtin.com/robotics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white link"
                  >
                    Robotics
                  </a>
                  <br />
                  <a
                    href="https://www.britannica.com/technology/artificial-intelligence"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white link"
                  >
                    Artificial Intelligence
                  </a>
                  <br />
                  <a
                    href="https://www.techtarget.com/iotagenda/definition/drone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white link"
                  >
                    Drone Technology and its Uses
                  </a>
                  <br />
                  <a
                    href="https://www.coursera.org/articles/what-is-machine-learning"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white link"
                  >
                    Machine Learning
                  </a>
                  <br />
                  <a
                    href="https://www.intellspot.com/what-is-robotics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white link"
                  >
                    Application of Robotics
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={5} sm={12}>
              <iframe
                title="Nepal Botworks Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4694009808104!2d85.43782767428428!3d27.671883476202925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb05006b04ab6b%3A0x6752b1e0d3cb50cb!2sNepal%20Botworks!5e0!3m2!1sen!2snp!4v1717139254109!5m2!1sen!2snp"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </section>
      {/* End info section */}
      {/* Footer section */}
      <footer className="Container-fluid footer_section">
        <Container>
          <Row>
            <Col lg="7" md="9" className="mx-auto">
              <p>
                &copy; 2024 All Rights Reserved By &nbsp;
                <a href="/home" target="_blank" rel="noopener noreferrer">
                  Nepal Botworks Pvt. Ltd.
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
      {/* End footer section */}
    </div>
  );
}

export default Footer;
