import React, { useState, useEffect } from "react";
import { Navigation } from "../components/landing/navigation";
import { Header } from "../components/landing/header";
import { About } from "../components/landing/about";
import { Services } from "../components/landing/services";
import { Pricing } from "../components/landing/Pricing";
import { Testimonials } from "../components/landing/testimonials";

import { Contact } from "../components/landing/contact";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import "../App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Landing = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Pricing data={landingPageData.Pricing} />
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default (Landing);

