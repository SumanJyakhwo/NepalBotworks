import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Button,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import "../NepalBotworks/home.css";
import CustomNavbar from "./Navbar";
import LandingPage from "./LandingPage";
import Service from "./Service";
import AboutUs from "./AboutUs";
import Patner from "./Patner";
import Team from "./Team";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
const Home = () => {
  return (
    <div className="sub_page">
      <div>
        <CustomNavbar />
        <LandingPage />
        <Service />
        <AboutUs />
        <Patner />
        <Team />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
