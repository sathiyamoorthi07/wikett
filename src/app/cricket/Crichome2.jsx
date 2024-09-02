import React from "react";
import Image from "next/image";
import Anroid from "../assots/play-store.png";
import Ios from "../assots/ios.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Trusted from "../assots/trusted.png";
import Contest from "../assots/trophy.png";
import Daily from "../assots/winnings.png";

function Crichome2() {
  return (
    <div className="flex h-screen justify-center ">
      <div className="">
        <div className="flex   lg:flex-row  flex-col text-3xl justify-center items-center  md:ml-[-10px] pt-16 text-customBlue-pink space-x-1 lg:ml-10 ">
          <div className="flex">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
          <div className="flex">
            <h1 className="text-sm text-gray-500 mt-2 pl-1 ">
              4.5 (1411+ reviews)
            </h1>
          </div>
        </div>
        <div className="md:my-10 my-5">
          <h1 className="text-[30px] md:text-[50px] lg:text-[60px] font-semibold text-white text-center lg:w-[80%]  mx-auto px-4">
            Transform your passion for cricket into ultimate fantasy glory
          </h1>
          {/* <h1 className=" text-[30px] md:text-[50px] lg:text-[60px] font-semibold text-white text-center mt-[-15px]">
            Win Upto ₹5 Crores Daily
          </h1> */}
          <p className="text-center text-sm lg:w-[50%] mx-auto text-gray-200 mt-5 font-medium px-4 leading-6">
            The Wikett app is accessible on Android and iOS. Android users can
            download it playStor, while iOS users can find it on the Apple App
            Store. Wikett game are Skill based Not playing bot, click the button
            then download the Wicket app
          </p>

          <div className=" flex justify-center md:mt-10 my-5 ">
            <Image
              src={Anroid}
              className="w-[100px] hover:scale-105  h-[38] lg:w-40 lg:h-14 rounded-md cursor-pointer"
            />
            <Image
              src={Ios}
              className="w-[100px] hover:scale-105 h-9 ml-5 lg:w-40 lg:h-14 rounded-md cursor-pointer"
            />
          </div>
        </div>
        <div className="flex mt-12 md:mt-[60px]  justify-center">
          <div className="flex md:px-5 pl-[4px]">
            <Image
              src={Trusted}
              alt=""
              className="md:w-[60px] md:h-[60px] md:mt-0 w-10 h-10 mb-2 mt-1"
            />
            <div className="px-3">
              <p className="md:text-2xl text-base font-bold text-white ">
                20M{" "}
              </p>
              <p className="md:text-lg text-xs text-white">Trusted Users</p>
            </div>
          </div>
          <div className="flex md:px-5 ">
            <Image
              src={Contest}
              alt=""
              className="md:w-[60px] md:h-[60px] w-10 h-10 mt-1"
            />
            <div className="px-3">
              <p className="md:text-2xl text-base font-bold text-white ">
                200+
              </p>
              <p className="md:text-lg text-xs text-white">Daily contests</p>
            </div>
          </div>
          <div className="flex  md:px-5s">
            <Image
              src={Daily}
              alt=""
              className="md:w-[60px] md:h-[60px] w-10 h-10 mb-2 mt-1"
            />
            <div className="px-3">
              <p className="md:text-2xl text-xl font-bold text-white ">₹20cr</p>
              <p className="md:text-lg text-xs text-white pl-2">Winnings Day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crichome2;
