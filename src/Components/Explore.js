import React from "react";

export default function Explore() {
  return (
    <div>
      <div className=" ml-44 mt-4">
        <img className=" h-16 w-16 sm:w-16 pverflow-hidden" src="images/logo.png" alt="logo" />
        
      </div>
      <div className="container">
        <h1 className="text-6xl font-bold ml-20 mb-8 mt-10">
          Discover the <br></br>Best Food <br></br> and Drinks
        </h1>
        <p className="ml-20">
          Naturally made Healthcare Products for the <br></br>better care &
          support of your body.
        </p>
        <button className="bg-red-600 rounded-full ml-20  mt-8 border-2 p-2 border-rose-600 ">
          Explore Now!
        </button>
      </div>
      <div className="container absolute top-0 right-0 h-96 w-1/2">
        <img src="images/pizza.png" alt="pizza" />
      </div>
      
    </div>
  );
}
