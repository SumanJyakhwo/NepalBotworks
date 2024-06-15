import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import "../NepalBotworks/home.css";
import ML from "../assets/img/ml.png";
import robot from "../assets/img/robot (1).png";
import IoT from "../assets/img/internet-of-things.png";
import drone from "../assets/img/drone.png";
import website from "../assets/img/app-development.png";

import { motion } from "framer-motion";

function Service() {
  const services = [
    {
      id: 1,
      title: "Robotics Education",
      image: robot,
      description:
        "Transform classrooms with engaging robotics education, sparking students curiosity and advancing their skills for tomorrow's world.",
    },
    {
      id: 2,
      title: "IoT Training",
      image: IoT,
      description:
        "Elevate your students' potential with dynamic IoT training, equipping them with the skills needed to thrive in the connected world of tomorrow.",
    },
    {
      id: 3,
      title: "Drone Technology",
      image: drone,
      description:
        "Unlock the skies with innovative drone technology training, inspiring students to navigate the future of aerial exploration with confidence.",
    },
    {
      id: 4,
      title: "AI & ML Training",
      image: ML,
      description:
        "Empower your students with AI and ML training, paving the way for them to revolutionize industries and shape tomorrow's world with intelligence and innovation.",
    },
    {
      id: 5,
      title: "Website Development",
      image: website,
      description:
        "Revolutionize your online presence with our expert website development services, tailored to elevate your brand, and drive results in the digital sphere.",
    },
    {
      id: 6,
      title: "Coding",
      image: website,
      description:
        "We offer instruction in several programming languages, including Python, as well as programs in machine learning and website development.",
    },
  ];

  return (
    <div>
      <Container>
        <div className="heading_container text-center">
          <h2 className="mt-3 text-heading services-heading">Our Services</h2>
        </div>
        <Row className="service_container mt-3">
          {services.map((service) => (
            <Col md="4" key={service.id} className="box">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card className="p-1 px-4 mb-4 card-shadow">
                  <div className="img-box text-center mt-2 py-4">
                    <img
                      src={service.image}
                      className="img-fluid img1 "
                      alt={service.title}
                      style={{ maxHeight: "100px", maxWidth: "100px" }}
                    />
                  </div>

                  <div className="detail-box mt-2">
                    <h5 className="text-subheading">{service.title}</h5>
                    <p>{service.description}</p>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Service;
