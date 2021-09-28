import React from "react";
import LocalData from "../data/data";
import SectionHeading from "../components/SectionHeading";
import { Col, Row } from "react-bootstrap";
import "./pagesStyles/services.scss";
function Services() {
  const { servicesData } = LocalData;
  return (
    <section className="section_services md:py-20">
      <div className="services-center section md:container ">
        <div className="services-header">
          <SectionHeading heading="Our Services" />
        </div>
        <Row>
          {servicesData.map((item, i) => {
            const { icon, text, name } = item;
            return (
              <Col key={i} lg={4} md={6}>
                <div className="box-services text-center p-4 lg:my-5 my-3">
                  <img className="w-20 mx-auto mb-4" src={`/images/icons-image/${icon}`} alt="" />
                  <h3 className="heading-services-item font-bold mb-2">{name}</h3>
                  <p className="description-services-item mb-2 text-gray-500 ">{text}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
}

export default Services;
