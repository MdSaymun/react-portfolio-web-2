import React from "react";
import { FaServicestack, FaHome, FaPencilAlt, FaAsterisk, FaRss, FaPhone, FaAngleRight, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../utils/context";
import "../components/comStyles/sidebar.scss";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  const navLinks = [
    { name: "Home", path: "/", style: "", icon: <FaHome /> },
    { name: "About", path: "/about", style: "", icon: <FaPencilAlt /> },
    { name: "Services", path: "/services", style: "", icon: <FaAsterisk /> },
    { name: "Portfolio", path: "/portfolio", style: "", icon: <FaRss /> },
    { name: "Blog", path: "/blog", style: "", icon: <FaServicestack /> },
    { name: "Contact", path: "/contact", style: "", icon: <FaPhone /> },
  ];
  return (
    <>
      <div className={`sidebar-bg-full lg:hidden  ${isSidebarOpen ? "block" : "hidden"}`} onClick={closeSidebar} />
      <section className={` lg:hidden text-white ${isSidebarOpen ? "show-sidebar sidebar-main" : "sidebar-main"}`}>
        <div className="container-sidebar">
          <Link to="/" className="brand-name" onClick={closeSidebar}>
            <h3>LoGo</h3>
          </Link>
          <div className="src-box-close-btn">
            <button className="close-sidebar-btn " onClick={closeSidebar}>
              <span className="font-light text-lg">
                <FaAngleRight />
              </span>
            </button>
            <div className="search-box">
              <span className="search-icon">
                <FaSearch />
              </span>
              <input type="text" name="searchbox" placeholder="Search" className="sidebar-search-box" />
            </div>
          </div>
          <div className="container-sidebar-links">
            <div className="sidebar-links text-center">
              {navLinks.map((item, i) => {
                return (
                  <Link key={i} to={item.path} className=" sidebar-link place-content-center " onClick={closeSidebar}>
                    <span className="icon-links px-2 text-lg">{item.icon}</span>
                    <span className="name-links px-2 text-lg ">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Sidebar;
