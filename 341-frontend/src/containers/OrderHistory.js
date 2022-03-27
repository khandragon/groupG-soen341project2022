import React, { useEffect, useState } from "react";
import { getOrders } from "../api/Orders-Api";
import { useNavigate } from "react-router-dom";

//This page shows the order history, it receivs the info from the database and ppresents it to the user.
//User must be logged in to access this page
function OrderHistory(props) {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loggedIn = localStorage.getItem("LoggedIn");

    if (loggedIn) {
      getOrders(loggedIn).then((res) => {
        setOrders(res);
      });
    }
  }, []);

  console.log(orders);

  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <p>Username</p>
        </div>
        <div className="col">
          <p>Isbn</p>
        </div>
        <div className="col">
          <p>Price(CAD)</p>
        </div>
        <div className="col">
          <p>Ordered Date</p>
        </div>
        <div className="col">
          <p>Arival Date</p>
        </div>
      </div>
      {orders ? (
        orders.map((order, index) => (
          <div
            className="row"
            style={{ cursor: "pointer" }}
            key={index + 1}
            onClick={() => navigate("../Products/" + order.productISBN)}
          >
            <div className="col">{index + 1}</div>
            <div className="col">
              <p>{order.username}</p>
            </div>
            <div className="col">
              <p>{order.productISBN}</p>
            </div>
            <div className="col">
              <p>{order.payed}</p>
            </div>
            <div className="col">
              <p>{order.orderedDate}</p>
            </div>
            <div className="col">
              <p>{order.arrivalDate}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Empty, No Orders</p>
      )}
    </div>
    //There is also a setup to ensure that there are orders that exist, if none it displays a short message.
  );
}

export default OrderHistory;
