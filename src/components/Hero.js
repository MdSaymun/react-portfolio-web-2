import React from "react";
import "./comStyles/hero.scss";
const Hero = () => {
  return (
    <>
      <header className="section-hero bg-no-repeat">
        <div className="section-hero-center md:container section lg:py-60 py-28 lg:px-10 ">
          <div className="my-info-hero">
            <h4 className="hero-sub-heading font-bold 2xl:text-2xl text-xl">Looking for a Designer</h4>
            <h1 className="hero-heading font-bold text-6xl 2xl:text-7xl">I am a Frank Jack.</h1>
            <p className="hero-desc xl:w-4/5 lg:text-gray-500">
              Obviously I'm a Web Designer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects.
            </p>
            <button className="button-hero-contact py-2 px-5 rounded-md text-lg text-white">Contact Us</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
