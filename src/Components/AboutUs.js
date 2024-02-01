import React from "react";

function AboutUs() {
  return (
    <div className="container mt-56 grid grid-cols-2 gap-4 bg-gray-100 max-w-full">
      <div className="container ml-24">
        <img w-16 h-16 mt-0 src="images/about.png" alt="about" />
      </div>
      <div className="container place-self-center h-96 w-96 ">
        <h1 className="text-5xl font-bold text-blue-900 mb-6">About Us</h1>
        <p>
          Make your business shine online with a custom food website designed
          just for you by a professional designer. Need ideas? We’ve collected
          some amazing examples of food websites from our global community of
          designers. Get inspired and start planning the perfect food web design
          today.
        </p>
        <button className="bg-red-500 rounded-full   mt-8 border-2 px-6 py-2 border-rose-500 ">
          Read More
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
