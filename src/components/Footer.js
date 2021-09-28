import React from "react";
import { Col, Row } from "react-bootstrap";
import "./comStyles/footer.scss";
import { FaFacebook, FaInstagram, FaTwitter, FaGooglePlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  const footerInfo = [
    {
      logo: "LoGo",
      address: "2005 Stokes Isle Apt. 896, Venav, New York 10010, USA",
      phone: "+99 545 684 25",
      iconSocial: [<FaFacebook />, <FaInstagram />, <FaTwitter />, <FaGooglePlus />],
    },
    {
      title: "Service",
      links: [
        { name: "How it Works", link: "/" },
        { name: "Guarantee", link: "/" },
        { name: "Security", link: "/" },
        { name: "Report Bug", link: "/" },
        { name: "Pricing", link: "/" },
      ],
    },
    {
      title: "About Us",
      links: [
        { name: "About Singleton", link: "/" },
        { name: "Jobs", link: "/" },
        { name: "Team", link: "/" },
        { name: "Testimonial", link: "/" },
        { name: "Blog", link: "/" },
      ],
    },
    {
      title: "Our Posts",
      posts: [
        {
          post: `Take Advantage Of Latest – Read These 6 Tips Read These
           March 7, 2020`,
        },
        {
          post: `Take Advantage Of Latest – Read These 6 Tips Read These
           March 7, 2020`,
        },
      ],
    },
  ];

  return (
    <section className="section_footer bg-gray-800 text-white">
      <div className="section-footer-center section md:container">
        <Row>
          {footerInfo.map((item, i) => {
            const { logo, address, phone, iconSocial, title, links, posts } = item;
            return (
              <Col key={i} lg={3} md={6}>
                <div className="box-footer-info p-4 text-gray-300">
                  {logo && <h2 className="logo-in-footer text-gray-50">{logo}</h2>}
                  {address && <p className="">{address}</p>}
                  {phone && <p>{phone}</p>}
                  {iconSocial && (
                    <div className="icons-social-footer flex items-center">
                      {iconSocial.map((item, i) => {
                        return (
                          <div key={i} className="icon-social px-2 text-2xl cursor-pointer">
                            {item}
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {title && <h2 className="text-gray-50">{title}</h2>}
                  {links && (
                    <div className="flex flex-col">
                      {links.map((item, i) => {
                        return (
                          <Link key={i} to={item.link} className="text-gray-300 py-1 hover:text-gray-600">
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                  {posts &&
                    posts.map((item, i) => {
                      return (
                        <div key={i} className="py-1">
                          {item.post}
                        </div>
                      );
                    })}
                </div>
              </Col>
            );
          })}
        </Row>
        <div className="hr-footer w-3/5 mx-auto py-4">
          <hr className="w-full" />
          <footer className="text-center text-gray-300">Copyright © MdSaymun all rights reserved.</footer>
        </div>
      </div>
    </section>
  );
};
export default Footer;
