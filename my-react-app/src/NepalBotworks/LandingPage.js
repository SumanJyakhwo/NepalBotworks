import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "../NepalBotworks/home.css";
import page1 from "../assets/img/cauraousal.jpg";
import page2 from "../assets/img/landing.jpg";
import page3 from "../assets/img/landing1.jpg";

const items = [
  {
    src: page1,
  },
  {
    src: page2,
  },
  {
    src: page3,
  },
];

function LandingPage() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.altText}
          className="d-block w-100 rounded-circle h-50 mt-5 img img-fluid"
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  const openForm = () => {
    window.open("https://forms.gle/zbs3zpmjfmdAwM1QA", "_blank");
  };

  return (
    <section>
      <Card className="bg-grey">
        <Container>
          <Row className="position-relative  pb-2" style={{ zIndex: 2 }}>
            <Col md="7" lg={7} sm={12}>
              <h2 className="mt-3 text-heading">
                Robotics Education Providers
              </h2>
              <p className="text-normal fs-18 mt-2">
                Embark on a transformative journey with us, where the fusion of
                robotics, coding, and engineering sparks innovation and ignites
                curiosity. Through hands-on learning experiences tailored to the
                needs of each student, we pave the way for the next generation
                of tech leaders. Together, let's redefine education, turning
                classrooms into dynamic hubs of creativity and inspiration. Join
                our community and unlock the boundless potential of tomorrow's
                technologists today! With our dedicated team of mentors and
                state-of-the-art resources, we ensure a supportive environment
                where every student thrives. Come, be part of a revolution in
                education, where imagination knows no bounds, and possibilities
                are limitless!
              </p>
              <Button
                onClick={openForm}
                className="btn btn-danger btn-label rounded-pill mb-2"
              >
                <i className="ri-mail-line label-icon align-middle rounded-pill fs-16 me-2"></i>{" "}
                Enroll Now
              </Button>{" "}
            </Col>
            <Col lg="5" md="5" sm={12} className=" text-right">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={previous}
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={next}
                />
              </Carousel>
            </Col>
          </Row>
        </Container>
      </Card>
    </section>
  );
}

export default LandingPage;
