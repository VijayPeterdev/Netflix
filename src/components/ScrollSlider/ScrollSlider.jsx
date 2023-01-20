import React from "react";


import SliderCards from "../SliderCards/SliderCards";
import "./ScrollSlider.scss";

const ScrollSlider = ({ movielist }) => {
  // console.log("movielist is : "+movielist);
  return (
    <div>
      <span
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          paddingTop: "-2rem",
          marginLeft: "1rem",
        }}
      >
        {movielist.listTitle}
      </span>
      <div className="row" style={{ display: "flex" }}>
        {movielist.listOfMovie.map((movie, index) => (
          <SliderCards index={index} item={movie} type={movielist.type} />
        ))}
      </div>
    </div>
  );
};

export default ScrollSlider;
