import Footer from "../Footer";
import CustomNavbar from "../Navbar";
import React, { useState } from "react";
import { Col, Collapse, Container, Input, Row } from "reactstrap";
import "../FAQ/fas.css";

function FAQ() {
  const [col1, setcol1] = useState(true);
  const [col2, setcol2] = useState(false);
  const [col3, setcol3] = useState(false);
  const [col4, setcol4] = useState(false);

  const t_col1 = () => {
    setcol1(!col1);
    setcol2(false);
    setcol3(false);
    setcol4(false);
  };

  const t_col2 = () => {
    setcol2(!col2);
    setcol1(false);
    setcol3(false);
    setcol4(false);
  };

  const t_col3 = () => {
    setcol3(!col3);
    setcol1(false);
    setcol2(false);
    setcol4(false);
  };

  const t_col4 = () => {
    setcol4(!col4);
    setcol1(false);
    setcol2(false);
    setcol3(false);
  };

  return (
    <div>
      <CustomNavbar />
      <Container>
        <Row>
          <Col xxl={5} className="align-self-center">
            <div className="py-4">
              <h4 className="display-6 text-heading">
                Frequently Asked Questions
              </h4>

              {/* <Input
                type="textarea"
                placeholder="Please Type Your Questions"
                className="mb-3"
              />
              <div className="d-flex gap-2">
                <button type="button" className="btn btn-danger rounded-pill">
                  <i className="ri-mail-line me-2"></i> Send Question
                </button>
                <button type="button" className="btn btn-primary rounded-pill">
                  <i className="ri-phone-line me-2"></i> Call Us at +977
                  9861806265
                </button>
              </div> */}
            </div>
          </Col>
        </Row>
        <Col lg={12}>
          <div>
            <div className="accordion " id="genques-accordion">
              <div className="accordion-item">
                <h6 className="accordion-header" id="genques-headingOne">
                  <button
                    className={`accordion-button ${!col1 ? "collapsed" : ""}`}
                    type="button"
                    onClick={t_col1}
                    style={{ cursor: "pointer" }}
                  >
                    1. What is Nepal Botworks?
                  </button>
                </h6>
                <Collapse isOpen={col1} className="accordion-collapse">
                  <div className="accordion-body">
                    If several languages coalesce, the grammar of the resulting
                    language is more simple and regular than that of the
                    individual languages. The new common language will be more
                    simple and regular than the existing European languages. It
                    will be as simple as their most common words.
                  </div>
                </Collapse>
              </div>
              <div className="accordion-item">
                <h6 className="accordion-header" id="genques-headingTwo">
                  <button
                    className={`accordion-button ${!col2 ? "collapsed" : ""}`}
                    type="button"
                    onClick={t_col2}
                    style={{ cursor: "pointer" }}
                  >
                    2. Why was Nepal Botworks established?
                  </button>
                </h6>
                <Collapse isOpen={col2} className="accordion-collapse">
                  <div className="accordion-body">
                    The new common language will be more simple and regular than
                    the existing European languages. It will be as simple as
                    Occidental; in fact, it will be Occidental. To an English
                    person, it will seem like simplified English, as a skeptical
                    Cambridge friend of mine told me what Occidental is.
                  </div>
                </Collapse>
              </div>
              <div className="accordion-item">
                <h6 className="accordion-header" id="genques-headingThree">
                  <button
                    className={`accordion-button ${!col3 ? "collapsed" : ""}`}
                    type="button"
                    onClick={t_col3}
                    style={{ cursor: "pointer" }}
                  >
                    3. What courses does Nepal Botworks offer?
                  </button>
                </h6>
                <Collapse isOpen={col3} className="accordion-collapse">
                  <div className="accordion-body">
                    The wise man therefore always holds in these matters to this
                    principle of selection: he rejects pleasures to secure other
                    greater pleasures, or else he endures pains to avoid worse
                    pains. But I must explain to you how all this mistaken idea
                    of denouncing pleasure and praising pain was born and I will
                    give you a complete.
                  </div>
                </Collapse>
              </div>
              <div className="accordion-item">
                <h6 className="accordion-header" id="genques-headingFour">
                  <button
                    className={`accordion-button ${!col4 ? "collapsed" : ""}`}
                    type="button"
                    onClick={t_col4}
                    style={{ cursor: "pointer" }}
                  >
                    4. Where do I contact?
                  </button>
                </h6>
                <Collapse isOpen={col4} className="accordion-collapse">
                  <div className="accordion-body">
                    Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia Curae; In ac dui quis mi consectetuer
                    lacinia. Nam pretium turpis et arcu arcu tortor, suscipit
                    eget, imperdiet nec, imperdiet iaculis aliquam ultrices
                    mauris.
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </Col>
      </Container>
      <Footer />
    </div>
  );
}

export default FAQ;
