import React from "react";
import { Col, Row } from "react-bootstrap";
import SectionHeading from "../components/SectionHeading";
import "./pagesStyles/contact.scss";
const Contact = () => {
  const contactInfo = [
    { placeholder: "Name", class: "input-name", type: "text" },
    { placeholder: "Email", class: "input-email ", type: "email" },
    { placeholder: "Website", class: "input-website", type: "text" },
    { placeholder: "Subject", class: "input-subject", type: "text" },
  ];
  return (
    <section className="section_contact bg-gray-50 py-4 ">
      <div className="section-contact-center section md:container ">
        <div className="section-contact-header my-5">
          <SectionHeading heading="Contact Me" />
        </div>
        <div className="section-contact-form w-full">
          <form className="lg:w-2/3 mx-auto p-4 ">
            <Row className="m-0">
              {contactInfo.map((item, i) => {
                const { placeholder, type } = item;
                return (
                  <Col md={6} key={i}>
                    <div className={`input-fild shadow-sm ${item.class}`}>
                      <input type={type} className="" placeholder={placeholder} />
                    </div>
                  </Col>
                );
              })}
            </Row>
            <div className="input-comment input-fild shadow-sm">
              <textarea name="comment" id="" cols="30" rows="5" className="" placeholder="Your Comment"></textarea>
            </div>
            <div className="btn-contact-form uppercase block mx-auto w-52 text-center bg-gray-800 text-white py-2 px-4 ">Send Request</div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
