import React from "react";
import { FoodProps } from "../types";

const Food: React.FC<FoodProps> = ({ name, cost, img, onAdd}) => { 
  return (
    <div className="col-sm-6 mb-3 mb-sm-0">
      <div className="card d-flex flex-row align-items-center ps-1" onClick={onAdd}>
        <div className="img">
          <img src={img} className="card-pic" alt="" />
        </div>
        <div className="card-body flex-grow-1">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Price: {cost}</p>
        </div>
      </div>
    </div>
  );
};

export default Food;
