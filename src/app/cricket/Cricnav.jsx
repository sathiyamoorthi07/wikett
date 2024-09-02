import React from "react";
import Image from "next/image";
import Logo from "../assots/Logo.svg";
import Crichome2 from "./Crichome2";
import Payment from "./Payment";
import { IoReorderThree } from "react-icons/io5";

function Cricnav() {
  return (
    <div>
      <div className="bg-customBlue-primblue md:h-[50rem]  h-45rem] ">
        <div className="flex  h-[60px]  bg-customBlue-primblue justify-between lg:py-8 lg:px-24 lg:h-[90px] shadow-2xl">
          <div className="flex items-center">
            <Image
              src={Logo}
              className="w-12 h-12 lg:h-16 lg:w-16  items-center pl-2 pb-2"
            />
            <h1 className="lg:text-4xl  text-2xl text-customBlue-pink font-bold ml-[-2px]">
              Wikett{" "}
              <span className="text-4xl text-customBlue-pink font-bold"></span>
            </h1>
          </div>
          {/* <div>
                        <ul className='flex text-white text-xl space-x-11 ml-52'>
                            <li className='hover:border-b-4 hover:border-customBlue-primblue'></li>
                            <li className='hover:border-b-4 hover:border-customBlue-primblue'></li>
                            <li className='hover:border-b-4 hover:border-customBlue-primblue'></li>
                            <li className='hover:border-b-4 hover:border-customBlue-primblue'></li>
                        </ul>
                    </div> */}
          <div className="flex items-center">
            <p className="bg-customBlue-pink lg:px-4 lg:py-3 px-2 py-1  hidden md:block  text-white rounded font-bold cursor-pointer mr-2 mt-1">
              Download App
            </p>
            <div className="">
              <IoReorderThree className="text-4xl text-customBlue-pink md:hidden mr-5" />
            </div>
          </div>
        </div>
        <div>
          <Crichome2 />
        </div>
      </div>
    </div>
  );
}

export default Cricnav;
