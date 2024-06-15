/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// import "assets/vendor/nucleo/css/nucleo.css";
// import "assets/vendor/font-awesome/css/font-awesome.min.css";
// import "assets/scss/argon-design-system-react.scss?v1.1.0";

// import Index from "views/Index.js";
// import Landing from "views/examples/Landing.js";

import LandingPage from "./NepalBotworks/LandingPage";
// import Login from "./views/examples/Login";
// import Profile from "./views/examples/Profile";
// import Register from "./views/examples/Register";
// import Landing from "./views/examples/Landing";
// import Header from "./SchoolPages/Header";
import Home from "./NepalBotworks/Home";
import AboutPage from "./NepalBotworks/AboutPage/AboutPage";
import Gallery from "./NepalBotworks/Gallery/Gallery";
import Contact from "./NepalBotworks/Contact/Contact";
import FAQ from "./NepalBotworks/FAQ/FAQ";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" exact element={<Index />} /> */}
      {/* <Route path="/landing-page" exact element={<Landing />} /> */}
      {/* <Route path="/login-page" exact element={<Login />} /> */}
      {/* <Route path="/profile-page" exact element={<Profile />} /> */}
      {/* <Route path="/register-page" exact element={<Register />} /> */}
      {/* <Route path="/school" exact element={<Header />} /> */}
      <Route path="/landing" exact element={<LandingPage />} />
      <Route path="/home" exact element={<Home />} />
      <Route path="/about" exact element={<AboutPage />} />
      <Route path="/gallery" exact element={<Gallery />} />
      <Route path="/contact" exact element={<Contact />} />
      <Route path="/faq" exact element={<FAQ />} />

      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  </BrowserRouter>
);
