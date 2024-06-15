import Footer from "../Footer";
import CustomNavbar from "../Navbar";
import React from "react";
import { motion } from "framer-motion";
import photo1 from "../../assets/img/Teaching.jpeg";
import photo from "../../assets/img/landing1.jpg";
import photo3 from "../../assets/img/cauraousal.jpg";
import { Col, Container, Row } from "reactstrap";
import "../AboutPage/About.css";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../Common/BreadCrumbs";
function AboutPage() {
  const hoverShadowStyle = {
    boxShadow: "0 0 15px rgb(134,53,3)",
  };

  return (
    <div>
      <CustomNavbar />
      <Breadcrumbs
        items={[{ title: "Home", link: "/home" }, { title: "About Us" }]}
      />

      <Container>
        <h2 className="mt-4 abouttext-heading text-center">
          Our mission is to revolutionize the world of practical education by
          integrating cutting-edge robotics technology. We aim to enhance the
          learning experience, making it more interactive, engaging, and
          impactful.
        </h2>
        <motion.img
          src={photo}
          className="d-block mt-0 img-fluid w-100"
          style={{ height: "auto", maxHeight: "400px", objectFit: "cover" }}
          alt="Description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <Row className="mt-4">
          <Col md="6">
            <p className="text-dark">
              We're a leading provider of cutting-edge technology education and
              IT services. From robotics and IoT training to drone technology
              and AI/ML expertise, we empower students and businesses alike to
              embrace innovation. Our comprehensive website development services
              ensure your online presence stands out, driving success in the
              digital landscape. With a focus on hands-on learning and tailored
              solutions, making it more interactive we're committed to shaping
              the future of technology and helping you thrive in an
              ever-evolving world. <br />
              <Link to="#" className="btn btn-sm bg-light">
                <span className="me-1">&#128151;</span> 55
              </Link>
            </p>
          </Col>
          <Col md="6">
            <motion.div
              className="img_Container mt-2"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="b1 img-fluid text-right">
                <img
                  src={photo1}
                  alt="Teaching"
                  className="d-block img-fluid w-100"
                  style={{
                    height: "auto",
                    maxHeight: "300px",
                    objectFit: "cover",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      hoverShadowStyle.boxShadow;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "";
                  }}
                />
              </div>
            </motion.div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md="6">
            <motion.div
              className="img_Container mt-2"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className=" b1 img-fluid text-right">
                <img
                  src={photo3}
                  alt="Teaching"
                  className="d-block img-fluid w-100"
                  style={{
                    height: "auto",
                    maxHeight: "300px",
                    objectFit: "cover",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      hoverShadowStyle.boxShadow;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "";
                  }}
                />
              </div>
            </motion.div>
          </Col>
          <Col md="6">
            <p className="text-dark">
              Through hands-on learning experiences tailored to the needs of
              each student, we pave the way for the next generation of tech
              leaders. Together, let's redefine education, turning classrooms
              into dynamic hubs of creativity and inspiration.
              <div className="hstack gap-2">
                <Link to="#" className="btn btn-sm bg-light">
                  <span className="me-1">&#128151;</span> 55
                </Link>
                <Link to="#" className="btn btn-sm btn-light">
                  <span className="me-1">&#128077;</span> 11
                </Link>
                <Link to="#" className="btn btn-sm btn-light">
                  <span className="me-1">&#128591;</span> 13
                </Link>
              </div>
            </p>
          </Col>
        </Row>

        <Row className="mt-5 mb-5">
          <Col md="6">
            <p className="text-dark">
              Join our community and unlock the boundless potential of
              tomorrow's technologists today! With our dedicated team of mentors
              and state-of-the-art resources, we ensure a supportive environment
              where every student thrives. Come, be part of a revolution in
              education, where imagination knows no bounds, and possibilities
              are limitless!
              <div className="hstack gap-2">
                <Link to="#" className="btn btn-sm bg-light">
                  <span className="me-1">&#128151;</span> 35
                </Link>
                <Link to="#" className="btn btn-sm btn-light">
                  <span className="me-1">&#128077;</span> 10
                </Link>
                <Link to="#" className="btn btn-sm btn-light">
                  <span className="me-1">&#128591;</span> 10
                </Link>
              </div>
            </p>
          </Col>
          <Col md="6">
            <motion.div
              className="img_Container mt-2"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className=" b1 img-fluid text-right">
                <img
                  src={photo1}
                  alt="Teaching"
                  className="d-block img-fluid w-100"
                  style={{
                    height: "auto",
                    maxHeight: "300px",
                    objectFit: "cover",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      hoverShadowStyle.boxShadow;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "";
                  }}
                />
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default AboutPage;
