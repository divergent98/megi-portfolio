import React from 'react'
import cv1 from "../../assets/cv-1.png";
import cv2 from "../../assets/cv-2.png";
import cv3 from "../../assets/cv-3.png";
import cv4 from "../../assets/cv-4.png";
import cv5 from "../../assets/cv-5.png";
import cv6 from "../../assets/cv-6.png";
import cv7 from "../../assets/cv-7.jpg";
const ThirdTab = () => {
  return (
    <div className="row justify-content-center">
    <div className="col-9">
      <div className="row justify-content-center">
        <div className="col-4 d-flex align-items-center justify-content-center my-3">
          <img src={cv1} className="img-fluid" />
        </div>
        <div className="col-4 d-flex align-items-center justify-content-center  my-3">
          <img src={cv2} className="img-fluid" />
        </div>
        <div className="col-4 d-flex align-items-center justify-content-center  my-3">
          <img src={cv3} className="img-fluid" />
        </div>
        <div className="col-4 d-flex align-items-center justify-content-center  my-3">
          <img src={cv4} className="img-fluid" />
        </div>
        <div className="col-4 d-flex align-items-center justify-content-center  my-3">
          <img src={cv5} className="img-fluid" />
        </div>
        <div className="col-4 d-flex align-items-center justify-content-center  my-3">
          <img src={cv6} className="img-fluid" />
        </div>
        <div className="col-4 d-flex align-items-center justify-content-center  my-3">
          <img src={cv7} className="img-fluid" />
        </div>
       
      </div>
    </div>
  </div>
  )
}

export default ThirdTab