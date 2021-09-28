import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./comStyles/navbar.scss";
import MyToggle from "./Switch";
import { useGlobalContext } from "../utils/context";
const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  const navLinks = [
    { name: "Home", path: "/", style: "" },
    { name: "About", path: "/about", style: "" },
    { name: "Services", path: "/services", style: "" },
    { name: "Portfolio", path: "/portfolio", style: "" },
    { name: "Blog", path: "/blog", style: "" },
    { name: "Contact", path: "/contact", style: "" },
  ];

  //  sticky navbar when scroll

  const [showNavOnScroll, setShowNavOnScroll] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
      if (window.pageYOffset > 100) {
        setShowNavOnScroll(true);
      } else {
        setShowNavOnScroll(false);
      }
    };
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, [showNavOnScroll]);

  // disable enable dark mode
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (enabled) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [enabled]);

  return (
    <header className={`${showNavOnScroll ? "stickyNavbar section_navbar " : "section_navbar"}`}>
      <div className="section md:container navbar-center">
        <div className="navbar-brand">
          <h2>LoGo</h2>
        </div>
        <div className="navlinks-container flex items-center">
          <div className="navlink flex items-center">
            {navLinks.map((item, index) => {
              return (
                <div className="link " key={index}>
                  <NavLink exact activeClassName="text-gray-400" to={item.path} className="px-3 text-lg text-gray-50 hover:text-gray-400">
                    {item.name}
                  </NavLink>
                </div>
              );
            })}
          </div>
          <div className="buttons-theme px-2">
            <MyToggle enabled={enabled} setEnabled={setEnabled} />
          </div>
        </div>
        <button className="menu-icon hidden text-2xl" onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
