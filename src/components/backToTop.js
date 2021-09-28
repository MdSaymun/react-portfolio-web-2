import React, { useEffect, useState } from "react";
import "./comStyles/btnGoToTop.scss";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  // function for go to top
  const [isShowGoToTopBtn, setIsShowGoToTopBtn] = useState(false);
  const handleGoToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY > 500) {
        setIsShowGoToTopBtn(true);
      } else {
        setIsShowGoToTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleShow);
    return () => window.removeEventListener("scroll", handleShow);
  }, [isShowGoToTopBtn]);

  return (
    <div className={` ${isShowGoToTopBtn ? "button-go-to-top show-go-to-top-btn" : "button-go-to-top"}`}>
      <button onClick={handleGoToTop} className="bg-gray-500 text-white py-2 px-3 rounded-sm">
        <FaArrowUp />
      </button>
    </div>
  );
};

export default BackToTop;
