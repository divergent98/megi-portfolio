import React from 'react'
import business1 from "../../assets/business-1.png";
import business2 from "../../assets/business-2.png";
import business3 from "../../assets/business-3.png";
import business4 from "../../assets/business-4.png";
import business5 from "../../assets/business-5.png";
import business6 from "../../assets/business-6.png";
const SecondTab = () => {
  return (
    <div className="row justify-content-center">
    <div className="col-9">
      <div className="row">
        <div className="col-6 d-flex align-items-center justify-content-center my-3">
          <img src={business1} className="img-fluid" />
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center  my-3">
          <img src={business2} className="img-fluid" />
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center  my-3">
          <img src={business3} className="img-fluid" />
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center  my-3">
          <img src={business4} className="img-fluid" />
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center  my-3">
          <img src={business5} className="img-fluid" />
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center  my-3">
          <img src={business6} className="img-fluid" />
        </div>
      
      </div>
    </div>
  </div>
  )
}

export default SecondTab