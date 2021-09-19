import React from "react";
import "../styles/componentsStyle/_hero.scss";
const Hero = () => {
  return (
    <div>
      <header className="section-hero bg-no-repeat" style={{ backgroundImage: `url("/images/home.png")` }}>
        <div className="section-hero-center md:container section lg:py-56 py-20 lg:px-10 ">
          <div className="my-info-hero">
            <h4 className="font-bold text-xl">Looking for a Designer</h4>
            <h1 className="font-bold text-6xl">I am a Frank Jack.</h1>
            <p className="xl:w-4/5 text-gray-500">
              Obviously I'm a Web Designer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects.
            </p>
            <button className="button-hero-contact py-2 px-5 rounded-md text-lg text-white">Contact Us</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
