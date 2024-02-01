import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";

export default function Pricing() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-8 mt-40 border-2 border-blue-400 bg-gray-100">
        <div className="py-4"> 
          <img src="images/logo2.png" alt="logo2" />
        </div>
        <div  className="py-4">
          <h5 className="text-blue-950 text-xl font-bold">Contact Us</h5>
          <p className="mt-6 text-lg">Zomato Mumbai Navi Road Block B, Mumbai 110080</p>
          <p className="mt-6">example@gmail.com</p>
          <p className="mt-6">64767474</p>
        </div>
        <div  className="py-4 ml-14" >
          <h5 className="text-blue-950 text-xl font-bold" >More</h5>
          <p className="mt-6">About Us</p>
          <p className="mt-6">Product Us</p>
          <p className="mt-6">Contact Us</p>
        </div>
        <div  className="py-4 " >
          <h5 className="text-blue-950 text-xl font-bold">Social Links</h5>
          <div className="flex flex-rows-3 gap-4 mt-8">
          <FaFacebookF/>
          <IoLogoInstagram />
          <FaTwitter />
          </div>
          
          
          <h1 className="text-end"> &copy; 2022 Food Truck Example</h1>
          
          
        
         
        </div>
      </div>
    </div>
  );
}
