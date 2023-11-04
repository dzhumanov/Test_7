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

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h4>Order details</h4>
          <div className="orders">
            {orders.map((order) => (
              <OrderContent
                key={order.name}
                name={order.name}
                count={order.count}
                func={() => findCost(order.name, order.count)}
                onDelete={deleteOrder}
              />
            ))}
          </div>
        </div>
        <div className="col">
          <h4>Add items:</h4>
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
