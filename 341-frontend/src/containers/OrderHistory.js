import React, { useEffect, useState } from "react";
import { getOrders } from "../api/Orders-Api";
//This page shows the order history, it receivs the info from the database and ppresents it to the user.
//User must be logged in to access this page
function OrderHistory(props) {
  const [orders, setOrders] = useState([]);

  const [loggedIn, setUserLoggedIn] = useState(
    localStorage.getItem("LoggedIn")
  );
  useEffect(() => {
    if (loggedIn) {
      getOrders(loggedIn).then((res) => {
        setOrders(res);
      });
    }
  }, []);

  //test data
  // const orders = [
  //   {
  //     username: "1234",
  //     productISBN: "547645684-84",
  //     payed: "34.79",
  //     orderedDate: "07/10/2022",
  //     arrivalDate: "03/03/2023",
  //   },

  //   {
  //     username: "1244",
  //     productISBN: "8743354256-84",
  //     payed: "34.79",
  //     orderedDate: "03/03/2022",
  //     arrivalDate: "07/10/2022",
  //   },
  // ];

  console.log(orders);
  //This function sorts the orders by the ordered date.
  // function compare(a, b) {
  //   if (a.orderedDate < b.orderedDate) {
  //     return -1;
  //   }
  //   if (a.orderedDate > b.orderedDate) {
  //     return 1;
  //   }
  //   return 0;
  // }

  // orders.sort(compare);

  return (
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <p>Username</p>
        </div>
        <div class="col">
          <p>Isbn</p>
        </div>
        <div class="col">
          <p>Price(CAD)</p>
        </div>
        <div class="col">
          <p>Ordered Date</p>
        </div>
        <div class="col">
          <p>Arival Date</p>
        </div>
      </div>
      {orders ? (
        orders.map((order, index) => (
          <div class="row">
            <div class="col">{index + 1}</div>
            <div class="col">
              <p>{order.username}</p>
            </div>
            <div class="col">
              <p>{order.productISBN}</p>
            </div>
            <div class="col">
              <p>{order.payed}</p>
            </div>
            <div class="col">
              <p>{order.orderedDate}</p>
            </div>
            <div class="col">
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
