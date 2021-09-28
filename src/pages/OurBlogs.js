import React from "react";
import { Row } from "react-bootstrap";
import SectionHeading from "../components/SectionHeading";
import SingleBlogCom from "../components/SingleBlogCom";
import { useGlobalContext } from "../utils/context";
const OurBlogs = () => {
  const { blogData } = useGlobalContext();

  return (
    <section className="section-our-blogs my-10">
      <div className="ourBlog-center md:container section">
        <div className="ourBlog-header mb-10">
          <SectionHeading heading="Our Letest News" />
        </div>
        <div className="section-blogs">
          {blogData && blogData.length === 0 ? (
            <h1>No blog to display</h1>
          ) : (
            <Row className="py-10">
              {blogData &&
                blogData.map((item, i) => {
                  return <SingleBlogCom {...item} key={i} />;
                })}
            </Row>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurBlogs;
