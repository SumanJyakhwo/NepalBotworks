import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Modal,
  ModalBody,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.jpg";
import image2 from "../../assets/img/image2.jpg";
import image3 from "../../assets/img/image3.png";
import Greenland from "../../assets/img/Greenland Workshop.jpg";
import Greenland1 from "../../assets/img/Greeland1.jpg";
import Greenland3 from "../../assets/img/Greenland5.jpg";
import Greenland4 from "../../assets/img/Greenland2.jpg";
import BalUddhar from "../../assets/img/Bal Uddhar.jpg";
import BalUddhar1 from "../../assets/img/Bal Uddhar1.jpg";
import BalUddhar2 from "../../assets/img/Bal Uddhar2.jpg";

import { motion } from "framer-motion";
import CustomNavbar from "../Navbar";
import Footer from "../Footer";
import Breadcrumbs from "../../Common/BreadCrumbs";
import { EmbeddedVideo, FacebookProvider } from "react-facebook";

const Gallery = () => {
  document.title = "Gallery | Velzon - React Admin & Dashboard Template";

  const [displayCategory, setCategory] = useState("All");
  const [toggle, setToggle] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleModal = () => {
    setToggle(!toggle);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    toggleModal();
  };
  const gallery = [
    {
      src: Greenland,
      altText: "Where Learning is Limitless",
      caption: `Inspiring Minds, Shaping Futures`,
      title: "Working at a coffee shop",
      auther: "Nancy Martino",
      likes: "2.2K",
      comments: "1.3K",
      category: "Greenland Workshop",
    },
    {
      src: Greenland4,
      altText: "Where Learning is Limitless",
      caption: `Inspiring Minds, Shaping Futures`,
      title: "Working at a coffee shop",
      auther: "Nancy Martino",
      likes: "2.2K",
      comments: "1.3K",
      category: "Greenland Workshop",
    },
    {
      src: Greenland1,
      altText: "Where Learning is Limitless",
      caption: `Inspiring Minds, Shaping Futures`,
      title: "Working at a coffee shop",
      auther: "Nancy Martino",
      likes: "2.2K",
      comments: "1.3K",
      category: "Greenland Workshop",
    },
    {
      src: Greenland3,
      altText: "Where Learning is Limitless",
      caption: `Inspiring Minds, Shaping Futures`,
      title: "Working at a coffee shop",
      auther: "Nancy Martino",
      likes: "2.2K",
      comments: "1.3K",
      category: "Greenland Workshop",
    },

    {
      src: BalUddhar,
      altText: "Commitment to Excellence in Education",
      caption: `Nurturing Potential, Achieving Success`,
      title: "Greenland Workshop discussion with team",
      auther: "Ruby Griffin",
      likes: "2.2K",
      comments: "1.3K",
      category: "Bal Uddhar Workshop",
    },
    {
      src: BalUddhar1,
      altText: "Commitment to Excellence in Education",
      caption: `Nurturing Potential, Achieving Success`,
      title: "Greenland Workshop discussion with team",
      auther: "Ruby Griffin",
      likes: "2.2K",
      comments: "1.3K",
      category: "Bal Uddhar Workshop",
    },
    {
      src: BalUddhar2,
      altText: "Commitment to Excellence in Education",
      caption: `Nurturing Potential, Achieving Success`,
      title: "Greenland Workshop discussion with team",
      auther: "Ruby Griffin",
      likes: "2.2K",
      comments: "1.3K",
      category: "Bal Uddhar Workshop",
    },
  ];
  const video = [
    {
      link: "https://www.facebook.com/reel/1580562855853365",
    },
    {
      link: "https://www.facebook.com/reel/438650282240506",
    },
  ];

  return (
    <React.Fragment>
      <CustomNavbar />
      <Breadcrumbs
        items={[{ title: "Home", link: "/home" }, { title: "Gallery" }]}
      />{" "}
      <Container>
        {/* <h2 className=" text-heading text-start services-heading">Gallery</h2> */}
        <Row>
          <Col lg={12}>
            <h2 className="  text-subheading text-start ">Photos</h2>

            <div className="text-start mt-3">
              <ul
                className="list-inline categories-filter animation-nav"
                id="filter"
              >
                <li className="list-inline-item">
                  <Button
                    to="#"
                    onClick={() => setCategory("All")}
                    className={
                      displayCategory === "All"
                        ? "categories active"
                        : "categories"
                    }
                    data-filter="*"
                  >
                    <div
                      style={{
                        color: "rgb(134,53,3)",
                        fontWeight: "bold",
                      }}
                    >
                      All
                    </div>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    to="#"
                    onClick={() => setCategory("Greenland Workshop")}
                    className={
                      displayCategory === "Greenland Workshop"
                        ? "categories active"
                        : "categories"
                    }
                    data-filter=".Greenland Workshop"
                  >
                    <div
                      style={{
                        color: "rgb(134,53,3)",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      Greenland Workshop
                    </div>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    to="#"
                    onClick={() => setCategory("Bal Uddhar Workshop")}
                    className={
                      displayCategory === "Bal Uddhar Workshop"
                        ? "categories active"
                        : "categories"
                    }
                    data-filter=".Bal Uddhar Workshop"
                  >
                    <div
                      style={{
                        color: "rgb(134,53,3)",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      Bal Uddhar Workshop
                    </div>
                  </Button>
                </li>
                {/* <li className="list-inline-item">
                  <Button
                    to="#"
                    onClick={() => setCategory("Programs")}
                    className={
                      displayCategory === "Programs"
                        ? "categories active"
                        : "categories"
                    }
                    data-filter=".Programs"
                  >
                    <div
                      style={{
                        color: "rgb(134,53,3)",
                        fontWeight: "bold",
                      }}
                    >
                      Programs
                    </div>
                  </Button>
                </li> */}
                {/* <li className="list-inline-item">
                  <Button
                    to="#"
                    onClick={() => setCategory("Tour")}
                    className={
                      displayCategory === "Tour"
                        ? "categories active"
                        : "categories"
                    }
                    data-filter=".Tour"
                  >
                    <div
                      style={{
                        color: "rgb(134,53,3)",
                        fontWeight: "bold",
                      }}
                    >
                      Tour
                    </div>
                  </Button>
                </li> */}
              </ul>
            </div>

            <Row className="gallery-wrapper">
              {gallery
                .filter(
                  ({ category }) =>
                    displayCategory === category || displayCategory === "All"
                )
                .map(({ src, title, auther, likes, comments }, key) => (
                  <Col
                    xxl={3}
                    xl={4}
                    sm={6}
                    className="element-item Greenland Workshop Bal Uddhar Workshop Tour"
                    key={key}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Card className="gallery-box mb-3 mt-3">
                        <div className="gallery-container">
                          <Link className="image-popup" to="#" title="">
                            <img
                              className="gallery-img img-fluid w-100 mx-auto rounded"
                              src={src}
                              alt=""
                              onClick={() => openModal(src)}
                              style={{ height: "350px" }}
                            />
                            <div className="gallery-overlay">
                              <h5 className="overlay-caption">
                                <div className="text-center p-2">{title}</div>
                              </h5>
                            </div>
                          </Link>
                        </div>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
        <h2 className="mt-3 text-subheading text-start ">Video</h2>

        <Row className="mt-3">
          {video.map((video, index) => (
            <Col lg={4} key={index} className="mb-3">
              <FacebookProvider appId="your-app-id">
                <EmbeddedVideo href={video.link} style={{ height: "20px" }} />
              </FacebookProvider>
            </Col>
          ))}
        </Row>
      </Container>
      <Modal
        isOpen={toggle}
        toggle={toggleModal}
        size="xl"
        className="modal-dialog-centered"
      >
        <ModalBody>
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-3 mb-3"
            onClick={toggleModal}
          >
            Back
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="img-fluid modal-image-cover"
          />
        </ModalBody>
      </Modal>
      <Footer />
    </React.Fragment>
  );
};

export default Gallery;
