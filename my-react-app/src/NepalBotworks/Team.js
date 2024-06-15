import React, { useState } from "react";
import { Col, Container, Row, Button } from "reactstrap";
import Suman from "../assets/img/suman.jpg";
import Suraj from "../assets/img/suraj.jpg";
import Sangram from "../assets/img/sangam.jpg";
import Rushali from "../assets/img/rus.png";
import Deen from "../assets/img/deen.png";

const items = [
  {
    src: Suman,
    name: "Suman Jyakhwo",
    location: "Bhaktapur, Nepal",
    buttonLabel: "Co-Founder",
  },
  {
    src: Suraj, //avatar3
    name: "Sooraj Majhi",
    location: "Biratnagar,Nepal",
    buttonLabel: "Co-Founder",
  },
  {
    src: Deen, //avatar5
    name: "Deenbandhu Chaudhary",
    location: "Kathmandu, Nepal",
    buttonLabel: "Co-Founder",
  },
  {
    src: Sangram, //avatar10
    name: "Sangram Bhandari",
    location: "Kathmandu, Nepal",
    buttonLabel: "Manager",
  },
  {
    src: Rushali, //avatar8
    name: "Rushali Lage",
    location: "Bhaktapur, Nepal",
    buttonLabel: "Manager",
  },
];

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [show, setShow] = useState(false);
  const handleDisplay = () => {
    setShow(!show);
  };

  const next = () => {
    const nextIndex = currentIndex + 3 < items.length ? currentIndex + 3 : 0;
    setCurrentIndex(nextIndex);
  };

  const previous = () => {
    const prevIndex =
      currentIndex - 3 >= 0 ? currentIndex - 3 : items.length - 3;
    setCurrentIndex(prevIndex);
  };

  const displayedItems = items.slice(currentIndex, currentIndex + 3);

  return (
    <>
      <div className=" bg-light" id="candidates">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center pt-0 ">
                <h1 className="text-heading mt-3 services-heading">Our Team</h1>
                <p className="text-muted mb-4">
                  We are highly dedicated to providing quality education through
                  practical methods. We believe in nurturing students through
                  their formative years to shape their futures.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {displayedItems.map((item, index) => (
              <Col lg={4} key={index} onClick={handleDisplay}>
                <div className="card text-center mb-3">
                  <div className="card-body p-4">
                    <img
                      src={item.src}
                      alt=""
                      className="rounded-circle avatar-md mx-auto text-center img-fluid"
                    />
                    <h5 className="fs-17 mt-2 ">{item.name}</h5>
                    <span className="text-muted fs-13 mb-3">{item.title}</span>
                    <p className="text-muted fs-14">
                      <i className="ri-map-pin-2-line text-primary me-1 align-bottom"></i>{" "}
                      {item.location}
                    </p>
                    {show && (
                      <Button
                        href="#!"
                        className="btn btn-soft-secondary w-100"
                      >
                        {item.buttonLabel}
                      </Button>
                    )}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="justify-content-center mt-4">
            <Col lg={4} className="text-center">
              <Button color="primary" onClick={previous} className="mb-3">
                Prev
              </Button>
              <Button color="primary" onClick={next} className="ms-3 mb-3">
                Next
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Team;
