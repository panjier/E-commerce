import React from "react";
import { PRODUCTS1 } from "./products";

const newArrival = () => {
  return (
    <>
      <div className="row mt-4">
        {PRODUCTS1.slice(1.5).map((product) => (
          <div className="col-3 p-2">
            <div key={product.id}>
              <div className="card h-100 m-auto p-3">
                <img
                  src={product.image}
                  alt=""
                  className="card-img-top img-fluid m-auto p-3"
                />
                <div className="card-details">
                  <div className="title mb-3">
                    <span>{product.brand}</span>
                    <h5 className="mt-2">{product.name}</h5>
                  </div>
                  <div className="card-footer text-center mb-3">
                    <p className="mb-1">{product.status}</p>
                    <p>
                      <strike className="text-danger">{product.rate}</strike>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default newArrival;
