import React, { useEffect, useState, useCallback } from "react";
import CartTopRow from "../components/CartTopRow";
import { getOrders } from "../api/Orders-Api";
import { getAccountInformation } from "../api/Accounts-Api";
import { getMultipleProductsByIsbn } from "../api/Products-Api";
import CartRow from "../components/CartRow";

function OrderInfo(props) {
  const [account, setAccount] = useState({
    username: "",
  });

  const [order, setOrder] = useState([]);

  const loggedIn = localStorage.getItem("LoggedIn");

  const loadData = useCallback(() => {
    getAccountInformation(loggedIn).then((res) => {
      setAccount(res);
      getOrders(res.username).then((res) => {
        getMultipleProductsByIsbn(res.productsByIsbn).then((res) => {
          setOrder(res);
        });
      });
    });
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      loadData();
    }
  }, [loggedIn, loadData]);

  return (
    <div>
      <h1 className="personal">Order Information</h1>
      <hr />
      <CartTopRow></CartTopRow>
      {console.log(order)}
      {order.map((item) => {
        return (
          <CartRow
            key={item.title}
            name={item.title}
            unit_price={item.Price}
          ></CartRow>
        );
      })}
    </div>
  );
}

export default OrderInfo;
