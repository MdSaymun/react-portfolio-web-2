import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../utils/context";
import { FaComment, FaCalendar } from "react-icons/fa";
import "./pagesStyles/_singleBlog.scss";
const SingleBlog = () => {
  const { name } = useParams();
  const { blogData } = useGlobalContext();
  const findItem = blogData && blogData.find((item) => item.title === name);
  console.log(findItem);
  const { image, title, text, comment, date } = findItem;
  return (
    <section className="section-singleBlog">
      <div
        className="section-singleBlog-breadcumb py-20 mb-10 text-white"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url("/images/breadcumb-bg.png")` }}
      >
        <div className="section container">
          <h4 className="text-center text-gray-50">
            <Link to="/" className="text-gray-50">
              Home<span>/</span>
            </Link>
            <span className="text-gray-400">{title}</span>
          </h4>
        </div>
      </div>
      <div className="container-singleBlog  md:container mx-auto">
        <Row>
          <Col md={8} className="px-5">
            <div className="img-single-blog">
              <img src={image} alt="" />
            </div>
            <div className="content-single-blog">
              <div className="info-blog flex items-center py-3">
                <span className="px-2 flex items-center">
                  <FaComment />
                  {comment}
                </span>
                <span className="flex items-center">
                  <FaCalendar />
                  {date}
                </span>
              </div>
              <p>{text}</p>
            </div>
          </Col>
          <Col md={4}></Col>
        </Row>
      </div>
    </section>
  );
};

export default SingleBlog;
