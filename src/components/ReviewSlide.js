import React from "react";
import allData from "../data/data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import { FaStarHalf } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
// import Swiper core and required modules

import SwiperCore, { Autoplay, Pagination } from "swiper/core";

// custom style
import "../styles/componentsStyle/_slider.scss";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);
const { clientReview } = allData;
export default function SwiperCom() {
  const rating = [<AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />, <FaStarHalf />];

  return (
    <div className="slider-main w-4/5 mx-auto">
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        slidesPerGroup={2}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2,
          },
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        // centeredSlides={true}

        className="mySwiper"
      >
        {clientReview.map((item, i) => {
          const { name, img, desc, position } = item;
          return (
            <SwiperSlide key={i} className="p-4 my-4 flex flex-col shadow-md">
              <div className="box-single-slide">
                <div className="info-user flex items-center justify-start py-3">
                  <div className="img-user w-14 h-14 mr-3 ">
                    <img src={`/images/image-client/${img}`} className="rounded-full" alt="" />
                  </div>
                  <div className="user-details flex-col flex items-start">
                    <h5 className="name-user font-bold">{name}</h5>
                    <div className="position-user capitalize text-gray-600 ">{position}</div>
                  </div>
                </div>
                <div className="user-review-description my-2 text-gray-500 text-left">{desc}</div>
                <div className="ratings flex items-center">
                  {rating.map((item) => {
                    return <div className="text-2xl">{item}</div>;
                  })}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
