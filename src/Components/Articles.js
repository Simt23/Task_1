import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Articles() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const data = [
    {
      img: "images/card1.png",
      name: "Grilled Tamatoes at Home",
      text:
        "Some quick example text to build on the card title and make up the\n" +
        "bulk of the card content.",
    },
    {
      img: "images/card2.png",
      name: "Snacks For Travel",
      text:
        "Some quick example text to build on the card title and make up the\n" +
        "bulk of the card content.",
    },
    {
      img: "images/card3.png",
      name: "Post-Workout Recipes",
      text:
        "Some quick example text to build on the card title and make up the\n" +
        "bulk of the card content.",
    },
    {
      img: "images/card4.png",
      name: "How to Grill Corn",
      text:
        "Some quick example text to build on the card title and make up the\n" +
        "bulk of the card content.",
    },
    {
      img: "images/card5.png",
      name: "Crunchwrap Supreme",
      text:
        "Some quick example text to build on the card title and make up the\n" +
        "bulk of the card content.",
    },
    {
      img: "images/card6.png",
      name: "Brocolli Cheese Soup",
      text:
        "Some quick example text to build on the card title and make up the\n" +
        "bulk of the card content.",
    },
  ];

  return (
    <div>
      <h1 className="my-20 text-6xl ml-24 font-semibold text-blue-950" mx-16>
        Latest Articles
      </h1>
      <Slider {...settings}>
        {data.map((d) => (
          <div className="flex flex-rows-3 m-10">
            <div className="w-80 rounded-lg border-2 px-6 py-6">
              <img src={d.img} alt="card1 " />
              <div className="card-body">
                <h5 className="my-4 text-xl text-blue-950 font-bold">
                  {d.name}
                </h5>
                <p className="card-text">{d.text}</p>
                <button className=" mt-4 rounded-full px-2 border-1 text-blue-700 border-blue-400">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Articles;
