import React from "react";
import "./comStyles/sectionHeading.scss";
const SectionHeading = ({ heading }) => {
  return (
    <>
      <h1 className=" text-center font-bold">{heading}</h1>
      <div className="section-heading-border ">
        <span className="line1 line"></span>
        <span className="line2 line"></span>
        <span className="line3 line"></span>
      </div>
    </>
  );
};

export default SectionHeading;
