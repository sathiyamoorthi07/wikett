import React from "react"; 
import { BiLogoLinkedinSquare } from "react-icons/bi"; 
import { FaYoutube } from "react-icons/fa6"; 
import { FaXTwitter } from "react-icons/fa6"; 
 
 
 
export default function Cricfooter() { 
  return ( 
 
  <div className="pt-5 pb-3 bg-gray-100"> 
      <div className="border-b border-gray-200 w-full lg:my-3 md:my-2 my-2 lg:ml-0 md:ml-0 ml-0"></div> 
 
     
      <div className="lg:px-10 md:px-6 px-4 lg:text-base md:text-base text-[15px] "> 
      <div className="flex flex-wrap gap-4 pb-4"> 
      <p className="text-gray-400">Wikett2024. All Rights Reserved.</p> 
      <p>Privacy Policy</p> 
      <p>Terms and Conditions</p> 
      <p>Do not sell my data</p> 
      <p>support@wikett.net</p> 
      </div> 
      <div className="flex gap-4 lg:justify-start items-start md:justify-start justify-center items-centerlg:space-x-5 md:space-x-4 space-x-2 lg:text-2xl md:text-base text-2xl"> 
          <BiLogoLinkedinSquare className="text-gray-400"/>  
          <FaYoutube className="text-gray-400"/> 
          <FaXTwitter className="text-gray-400"/> 
      </div> 
      </div>  
    </div> 
  ); 
}