import React from "react";
import { Col, Row } from "react-bootstrap";
import ReviewSlide from "../components/ReviewSlide";
import SectionHeading from "../components/SectionHeading";
import allData from "../data/data";
import "./pagesStyles/ourResume.scss";
const OurResume = () => {
  const { resumeData } = allData;
  return (
    <section className="section_our_resume my-20">
      <div className="section md:container our-resume-center pb-10">
        <div className="resume-header">
          <SectionHeading heading="Our Resume" />
        </div>
        <div className="our-resume-info py-10">
          <Row className="justify-center">
            {resumeData.map((item, i) => {
              const { time, position, desc } = item;
              return (
                <Col md={5} key={i}>
                  <div className="single-resume-info p-4 my-4 rounded-md">
                    <h3 className="text-gray-600 text-lg">{time}</h3>
                    <h2 className="font-bold text-2xl">{position}</h2>
                    <p className="text-gray-500 ">{desc}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      <div className="client-reviews py-14 bg-gray-100">
        <div className="client-review-header mb-10">
          <SectionHeading heading="What Client Say ?" />
        </div>
        <div className="md:container section client-reviews-container">
          <ReviewSlide />
        </div>
      </div>
    </section>
  );
};

export default OurResume;
