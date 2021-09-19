import React from "react";
import Portfolio from "./Portfolio";
import About from "./About";
import Hero from "../components/Hero";
import OurResume from "./OurResume";
import OurBlogs from "./OurBlogs";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <OurResume />
      <OurBlogs />
    </>
  );
};

export default Home;
