import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [orders, setOrders] = useState([]);
  

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h4>Order details</h4>
          <div className="orders"></div>
        </div>
        <div className="col">
          <h4>Add items:</h4>
          <div className="row orderList">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card d-flex flex-row align-items-center ps-1">
                <div className="img">
                  <img
                    src="src/assets/burger.png"
                    className="card-pic"
                    alt=""
                  />
                </div>
                <div className="card-body flex-grow-1">
                  <h5 className="card-title">Food name</h5>
                  <p className="card-text">price: 100kgs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
