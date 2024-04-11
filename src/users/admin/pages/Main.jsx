import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide01Image from "../../../auth/assets/slide-1-pic.jpg";
import Slide02Image from "../../../auth/assets/slide-2-pic.jpg";
import Slide03Image from "../../../auth/assets/slide-3-pic.jpg";
import { Link } from "react-router-dom";

const Main = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <div className="relative z-7 ">
        <div className=" p-6 pb-0 pt-[1.7rem] overflow-hidden z-10 ">
          <Slider {...settings}>
            <div>
              <img
                className=" object-cover w-full  h-[35vw] "
                src={Slide01Image}
                alt=""
              />
            </div>
            <div>
              <img
                className=" object-cover w-full  h-[35vw] "
                src={Slide02Image}
                alt=""
              />
            </div>
            <div>
              <img
                className=" object-cover w-full   h-[35vw]"
                src={Slide03Image}
                alt=""
              />
            </div>
          </Slider>
        </div>

        <div className="bg-amber-200 h-64 m-7  rounded-2xl p-7">
          <div className="flex justify-around">
            <Link to="#" className="text-black text-lg mr-4 ">
              <div className="bg-blue-200 border border-black rounded p-3 h-24 w-40 flex flex-col justify-center items-center hover:bg-blue-100">
                Jobs{" "}
              </div>
            </Link>
            <Link to="#" className="text-black text-lg mr-4 ">
              <div className="bg-blue-200 border border-black rounded p-3 h-24 w-40 flex flex-col justify-center items-center hover:bg-blue-100">
                Students
              </div>
            </Link>
            <Link to="#" className="text-black text-lg mr-4 ">
              <div className="bg-blue-200 border border-black rounded p-3 h-24 w-40 flex flex-col justify-center items-center hover:bg-blue-100">
                Companies
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;