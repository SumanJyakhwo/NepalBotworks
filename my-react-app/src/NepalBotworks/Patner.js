import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import BESS from "../assets/img/BESS.jpeg";
import Dirghayu from "../assets/img/New Dirghayu.jpeg";
import Zenith from "../assets/img/Zenith.jpeg";
import Littlemoon from "../assets/img/Littlemoon.jpg";
import { motion } from "framer-motion";

function Patner() {
  const partner = [
    {
      id: 1,
      title: "Bhaktapur English Secondary School",
      image: BESS,
      link: "https://bess.edu.np/",
    },
    {
      id: 2,
      title: "Zenith Academy",
      image: Zenith,
    },

    {
      id: 3,
      title: "Little Moon High School",
      image: Littlemoon,
    },
    {
      id: 4,
      title: "New Dirghayu Secondary Boarding English School",
      image: Dirghayu,
    },
    {
      id: 5,
      title: "Greenland Secondary School",
      // image: robot,
    },
  ];
  return (
    <div>
      <Container>
        <div className="heading_container text-center">
          <h2 className="mt-3 text-heading services-heading">Our Partners</h2>
        </div>

        <Row className="service_container mt-3">
          {partner.map((service) => (
            <Col md="4" key={service.id} className="box">
              <motion.div whileHover={{ scale: 1.05 }}>
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card
                    className="p-1 px-4 mb-4 card-shadow"
                    style={{ maxHeight: "800px" }}
                  >
                    <div className="img-box text-center mt-2">
                      <img
                        src={service.image}
                        className="img-fluid img1 w-100"
                        alt={service.title}
                      />
                    </div>

                    <div className="detail-box mt-2">
                      <h5
                        className={`text-subheading px-2 ${
                          service.link ? "services-heading" : ""
                        }`}
                      >
                        {service.title}
                      </h5>

                      <p>{service.description}</p>
                    </div>
                  </Card>
                </a>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
      {/* End blog section */}
    </div>
  );
}

export default Patner;
