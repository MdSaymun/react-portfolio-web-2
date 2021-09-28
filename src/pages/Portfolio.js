import React, { useState, useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import CounterCom from "../components/CounterCom";
import SectionHeading from "../components/SectionHeading";
import allData from "../data/data";
import "./pagesStyles/portfolio.scss";
const Portfolio = () => {
  const { projectData } = allData;
  const [newProjectData, setNewProjectData] = useState(projectData);
  const [index, setIndex] = useState(0);
  const newCategory = ["All", ...new Set(projectData.map((item) => item.category))];
  const handleFilterItem = (catName) => {
    if (catName === "All") {
      return setNewProjectData(projectData);
    }
    const filterItem = projectData.filter((item) => item.category === catName);
    setNewProjectData(filterItem);
  };

  const [isCounterPosition, setIsCounterPosition] = useState(false);
  const clientInfoRef = useRef(null);
  useEffect(() => {
    const elementPosition = clientInfoRef.current.getBoundingClientRect().top;

    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (scrollPosition > elementPosition) {
        setIsCounterPosition(true);
      }
    });
    return () => {};
  }, []);
  return (
    <section className="section_portfolio py-10">
      <div className="section md:container section-portfolio-center ">
        <div className="section-portfolio-header my-20">
          <SectionHeading heading="Our Portfolio" />
        </div>
        <div className="menu-portfolio-items flex flex-wrap items-center py-4">
          {newCategory.map((item, i) => {
            return (
              <div
                className={`px-3 py-2 menu-item rounded-md mx-2 border   ${index === i && "bg-gray-800 text-white"}`}
                key={i}
                onClick={() => {
                  handleFilterItem(item);
                  setIndex(i);
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className="items-portfolio ">
          <Row className=" row-portfolio-items">
            {newProjectData.map((item, i) => {
              const { image, title, category } = item;
              return (
                <Col key={i} lg={4} md={6}>
                  <div className="box-single-portfolio relative h-64" style={{backgroundImage:`url(${image})`}}>                    
                    <div className="porfolio-info bg-gray-200 p-3 absolute top-0 left-0 w-full h-full">
                      <h2 className="text-xl font-bold">{title}</h2>
                      <small>{category}</small>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <div className="seemore-btn-portfolio text-white py-2 px-4 rounded-md">See More</div>
        </div>
      </div>
      <div className="our-info-container py-14 bg-gray-50" ref={clientInfoRef}>
        <div className="section md:container our-info-center">
          <CounterCom isCounterPosition={isCounterPosition} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
