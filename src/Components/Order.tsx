import React from "react";
import { OrderContentProps } from "../types";

const OrderContent: React.FC<OrderContentProps> = ({name, count, func, onDelete}) => {
  return (
    <div key={name} className="d-flex align-items-center gap-3 mb-3">
      <h4 className="m-0 ">{name}</h4>
      <p className="m-0 fs-5 d-flex flex-grow-1">
        <span className="d-inline-block">x {count}</span> <span className="ms-auto d-block">{func()} KGS</span>
      </p>
      <button className="btn btn-danger" onClick={() => onDelete(name)}>Delete</button>
    </div>
  );
};

export default OrderContent;
