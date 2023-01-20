import React from "react";
import "./HomeFeatures.scss";

const HomeFeatures = ({titleone,detailone,title1video,titletwo,detailtwo,title2img,tvholder,customcss}) => {
  return (
    <>
      <div className="homeFeatures__container">
        <div className="right">
          <span className="title">{titleone}</span>
          <span className="details">
           {detailone}
          </span>
        </div>
        <div className="left">
          <video width="500" height="500"  autoPlay loop>
            <source
              src={title1video}
              type="video/mp4"
            />
          </video>

          <img
            className={customcss? customcss: "tv__holder "}
            src={tvholder}
            alt="img"
          />
        </div>
      </div>
      <div className="homeFeatures__container">
      
        <div className="left">
          <img src={title2img} alt="img"/>
        </div>

        <div className="right">
          <span className="title">{titletwo}</span>
          <span className="details">
           {detailtwo}
          </span>
        </div>
      </div>
    </>
  );
};

export default HomeFeatures;
