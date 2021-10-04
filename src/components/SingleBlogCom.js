import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./comStyles/singleBlogCom.scss";
const SingleBlogCom = (props) => {
  const { image, title, text, id } = props;
  return (
    <Col lg={4} md={6} className="p-4">
      <Link to={`/singleblog/${id.toString()}`}>
        <div className="box-single-blog">
          <div className="img-single-blog">
            <img className="" src={image} alt="" />
          </div>
          <h2 className="mb-3 text-2xl font-bold">{title}</h2>
          <p className="mb-3 text-gray-600 ">{text}</p>
        </div>
      </Link>
    </Col>
  );
};

export default SingleBlogCom;
