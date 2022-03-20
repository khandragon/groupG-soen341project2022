import React, { useState } from "react";

function OrderHistory(props) {
  //test data: Where is the function for this???
  const orders = [
    {
      number: "1234",
      placedOn: "02/02/2022",
      price: "34.79",
      status: "Delivered",
    },

    {
      number: "5678",
      placedOn: "29/01/2022",
      price: "83.56",
      status: "Processing",
    },
  ];
  return (
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <p>Order #</p>
        </div>
        <div class="col">
          <p>Placed On</p>
        </div>
        <div class="col">
          <p>Price(CAD)</p>
        </div>
        <div class="col">
          <p>Status</p>
        </div>
      </div>
      {orders.map((order, index) => (
        <div class="row">
          <div class="col">{index + 1}</div>
          <div class="col">
            <p>{order.number}</p>
          </div>
          <div class="col">
            <p>{order.placedOn}</p>
          </div>
          <div class="col">
            <p>{order.price}</p>
          </div>
          <div class="col">
            <p>{order.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderHistory;
