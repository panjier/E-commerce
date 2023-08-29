import React from "react";
import icon1 from "../assets/images/icons/icon1.png";
import icon2 from "../assets/images/icons/icon2.png";
import icon3 from "../assets/images/icons/icon3.png";
import icon4 from "../assets/images/icons/icon4.png";
import icon5 from "../assets/images/icons/icon5.png";
import icon6 from "../assets/images/icons/icon6.png";

const hero = () => {
  return (
    <>
      <div className="hero p-2 mt-4 mb-4">
        <div className="container-xxl">
          <div className="row">
            <div className="hero-details d-flex justify-content-center text-center p-3">
              <div className="card-details mx-3">
                <div className="card p-2">
                  <img src={icon1} alt="" className="img-fluid mb-2" />
                  <p className="p-desc">Fast Order</p>
                </div>
              </div>
              <div className="card-details mx-3">
                <div className="card p-2">
                  <img src={icon2} alt="" className="img-fluid mb-2" />
                  <p className="p-desc">Quick Shipping</p>
                </div>
              </div>
              <div className="card-details mx-3">
                <div className="card p-2">
                  <img src={icon3} alt="" className="img-fluid mb-2" />
                  <p className="p-desc">High Saves</p>
                </div>
              </div>
              <div className="card-details mx-3">
                <div className="card p-2">
                  <img src={icon4} alt="" className="img-fluid mb-2" />
                  <p className="p-desc">24/7 Support</p>
                </div>
              </div>
              <div className="card-details mx-3">
                <div className="card p-2">
                  <img src={icon5} alt="" className="img-fluid mb-2" />
                  <p className="p-desc">Discount</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default hero;
