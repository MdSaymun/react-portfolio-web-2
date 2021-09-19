import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaDribbble, FaPhone, FaHome, FaEnvelope, FaUsers, FaKey } from "react-icons/fa";
import "../styles/componentsStyle/_navbarTop.scss";
const NavbarTop = () => {
  return (
    <section className="section-navbar-top p-2">
      <div className="section md:container mx-auto navbar-top-header">
        <Row>
          <Col md={6} className=" mb-lg-0 mb-2">
            <div className="icons-contact flex items-center">
              <div className="icon-address flex items-center">
                <div className="icons-address flex items-center">
                  <span className="mx-2">
                    <FaHome className="text-base" />
                  </span>
                  <span>1st Floor New World</span>
                </div>
                <div className="icons-phone flex items-center">
                  <span className="mx-2">
                    <FaPhone className="text-base" />
                  </span>
                  <span>+122-3434-3433</span>
                </div>
                <div className="icons-email flex items-center">
                  <span className="mx-2">
                    <FaEnvelope className="text-base" />
                  </span>
                  <span>email@gmail.com</span>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} className="grid grid-cols-2 mb-lg-0 mb-2">
            <div className="icons-social flex items-center">
              <span>
                <FaInstagram />
              </span>
              <span>
                <FaFacebook />
              </span>
              <span>
                <FaDribbble />
              </span>
              <span>
                <FaTwitter />
              </span>
            </div>
            <div className="navbar-top-buttons flex items-center justify-end">
              <button className="flex items-center">
                <FaUsers />
                <span>log in</span>
              </button>
              <span className="mx-2">|</span>
              <button className="flex items-center">
                <FaKey />
                <span>Register</span>
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default NavbarTop;
