import { useState } from "react";

import FOOD from "./Constants/Constant";

import Food from "./Components/Food";
import OrderContent from "./Components/Order";

import { Order } from "./types";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = (name: string) => {
    setOrders((prevState) => {
      const existOrder = prevState.find((order) => order.name === name);
      if (existOrder) {
        return prevState.map((order) =>
          order.name === name ? { ...order, count: order.count + 1 } : order
        );
      } else {
        return [...prevState, { name: name, count: 1 }];
      }
    });
  };

  const deleteOrder = (name: string) => {
    setOrders((prevState) => {
      const newState = prevState.filter((order) => order.name !== name);
      return newState;
    });
  };

  const findCost = (name: string, count: number): number => {
    const foodInfo = FOOD.find((item) => item.name === name);
    if (foodInfo) {
      const cost = foodInfo?.cost * count;
      return cost;
    } else {
      throw new Error("No such food");
    }
  };

  const totalCost = () => {
    const cost = orders.reduce((acc, order) => {
      const orderInfo = FOOD.find((item) => item.name === order.name);
      if (orderInfo) {
        return acc + orderInfo.cost * order.count;
      } else {
        throw new Error("Info not found!");
      }
    }, 0);
    return cost;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col mt-4">
          <h4 className="bg-white p-3 rounded-5">Order details</h4>
          <div className="orders bg-white p-3 rounded-5">
            {orders.length === 0 ? (
              <p className="fs-4">
                Order is empty! <br />
                Please add some items!
              </p>
            ) : (
              orders.map((order) => (
                <OrderContent
                  key={order.name}
                  name={order.name}
                  count={order.count}
                  func={() => findCost(order.name, order.count)}
                  onDelete={deleteOrder}
                />
              ))
            )}
            <hr />
            {orders.length > 0 && (
              <p className="fs-3 fw-bold">Total cost: {totalCost()} KGS</p>
            )}
          </div>
        </div>
        <div className="col mt-4">
          <h4 className="bg-white p-3 rounded-5">Add items:</h4>
          <div className="row orderList">
            {FOOD.map((order) => (
              <Food
                key={order.name}
                name={order.name}
                cost={order.cost}
                img={order.img}
                onAdd={() => addOrder(order.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
