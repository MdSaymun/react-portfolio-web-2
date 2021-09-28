import React from "react";
import Portfolio from "./Portfolio";
import About from "./About";
import OurResume from "./OurResume";
import OurBlogs from "./OurBlogs";
import Services from "./Services";
import Contact from "./Contact";
import Hero from "../components/Hero";
import BackToTop from "../components/backToTop";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <OurResume />
      <OurBlogs />
      <Contact />
      <BackToTop />
    </>
  );
};

export default Home;
