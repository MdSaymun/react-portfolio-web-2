import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/componentsStyle/_navbar.scss";
const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/", style: "" },
    { name: "About", path: "/about", style: "" },
    { name: "Services", path: "/services", style: "" },
    { name: "Portfolio", path: "/portfolio", style: "" },
    { name: "Blog", path: "/blog", style: "" },
    { name: "Contact", path: "/contact", style: "" },
  ];
  return (
    <section className="section_navbar py-3">
      <div className="section navbar-center">
        <div className="navbar-brand">
          <h2>LoGo</h2>
        </div>
        <div className="navlinks-container flex items-center">
          <div className="navlink flex items-center">
            {navLinks.map((item, index) => {
              return (
                <div className="link " key={index}>
                  <NavLink exact activeClassName="text-gray-400" to={item.path} className="px-2 text-lg text-gray-50 hover:text-gray-400">
                    {item.name}
                  </NavLink>
                </div>
              );
            })}
          </div>
          <button className="button-hire-me py-2 px-3 rounded-md text-white">Hire Me</button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
