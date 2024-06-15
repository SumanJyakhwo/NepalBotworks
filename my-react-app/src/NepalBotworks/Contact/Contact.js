import CustomNavbar from "../Navbar";
import Breadcrumbs from "../../Common/BreadCrumbs";
import Footer from "../Footer";
import React from "react";
import { Card, Col, Container, Input, Row } from "reactstrap";

function Contact() {
  return (
    <div>
      <CustomNavbar />
      <Breadcrumbs
        items={[{ title: "Home", link: "/home" }, { title: "Contact Us" }]}
      />
      <Container>
        {/* <h2 className="text-heading text-start services-heading">Contact Us</h2> */}
        <h6 className="text-start text-muted">
          If you want to send us a message
        </h6>
        <Row>
          <Col lg={8} md={12}>
            <Card className="p-3">
              <form action="https://formspree.io/f/mayrkpnl" method="POST">
                <div className="mt-3">
                  <label htmlFor="name">Name:</label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    name="name"
                    required
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="email">Email:</label>
                  <Input
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    required
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="phone">Phone Number:</label>
                  <Input
                    type="number"
                    placeholder="Enter Your Phone Number"
                    name="phone"
                  />
                </div>

                <div className="mt-3">
                  <label htmlFor="message">Message:</label>
                  <Input
                    type="textarea"
                    className="message-box"
                    placeholder="Message"
                    name="message"
                    required
                  />
                </div>

                <div className="d-flex mt-3 mb-3">
                  <button
                    type="submit"
                    className="btn btn-danger btn-label rounded-pill"
                  >
                    <i className="ri-mail-line label-icon align-middle rounded-pill fs-16 me-2"></i>{" "}
                    Send
                  </button>
                </div>
              </form>
            </Card>
          </Col>

          <Col lg={4} md={12} className="mt-3 mt-lg-0">
            <div className="facebook-plugin-container">
              <iframe
                title="Facebook Page"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61557855965257&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="500"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Contact;
