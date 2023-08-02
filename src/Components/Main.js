import React from "react";
import image from "../image.jpg";
const Main = () => {
  return (
    <div className="container2">
      <div className="image">
        <img src={image} alt="is not rendering" />
      </div>
      <div className="text">
        <h1>
          Power Up with Top <br /> Electronics Brands
        </h1>
        <p>
          Welcome to our Electronic Wonderland! Discover the latest gadgets and
          top-notch appliances for a seamless shopping experience. Embrace
          innovation and elevate your lifestyle with us!
        </p>
      </div>
    </div>
  );
};

export default Main;
