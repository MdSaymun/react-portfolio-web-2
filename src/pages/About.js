import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FaArrowCircleDown } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import "../styles/pagesStyle/_aboutMe.scss";
import SectionHeading from "../components/SectionHeading";
const BorderLinearProgress = makeStyles((theme) => ({
  root: {
    height: 8,
    borderRadius: 5,
    backgroundColor: "#f1f1f1",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#39393d",
  },
}));
const About = () => {
  const classes = BorderLinearProgress();
  const skill = [
    { name: "Brand Identity", value: 60 },
    { name: "Javascript", value: 90 },
    { name: "Web Design", value: 70 },
    { name: "Photoshop", value: 70 },
  ];
  const skillbarRef = useRef(null);

  const [ismouseOnSkill, setIsmouseOnSkill] = useState(false);
  useEffect(() => {
    const skillbarPosition = skillbarRef.current.getBoundingClientRect().top;
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (scrollPosition > skillbarPosition) {
        setTimeout(() => {
          setIsmouseOnSkill(true);
        }, 500);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="section-about-me my-20">
      <div className="section md:container about-me-center">
        <div className="services-header my-20">
          <SectionHeading heading="About me" />
        </div>
        <Row className="items-center">
          <Col lg={6}>
            <div className="about-me-image mb-6" style={{ backgroundImage: `url("/images/shapes/shape.svg")` }}>
              <img src="/images/aboutme.png" alt="" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-me-info">
              <h3 className="font-bold mb-1">I am a Designer</h3>
              <h1 className="font-bold mb-4">My Real Life is Up to You?</h1>
              <p className="w-4/5 text-gray-500 mb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod por incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo onsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat Pidatat non proident, sunt in culpa qui officia deserunt mollit anim id est erun laborum. Sed ut perspiciatis unde omnis
              </p>
              <button className="btn-download-cv rounded-lg py-2 px-4">
                CV Download
                <span className="mx-2">
                  <FaArrowCircleDown />
                </span>
              </button>
            </div>
          </Col>
        </Row>
        <div className="skillbars py-14">
          <Row>
            {skill.map((item, i) => {
              return (
                <Col md={6} key={i}>
                  <div className="box-skill p-4 py-3">
                    <div className="skill-info flex items-center justify-between mb-2">
                      <span>{item.name}</span>
                      <span className="skill-label">{Math.round(ismouseOnSkill ? item.value : 0)}%</span>
                    </div>
                    <LinearProgress ref={skillbarRef} classes={{ root: classes.root, bar: classes.bar }} value={ismouseOnSkill ? item.value : 0} variant="determinate" />
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default About;
