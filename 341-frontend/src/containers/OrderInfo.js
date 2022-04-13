import React, { useEffect, useState, useCallback, useContext } from "react";
import { getCart } from "../api/Carts-Api";
import { getAccountInformation } from "../api/Accounts-Api";
import { getMultipleProductsByIsbn } from "../api/Products-Api";
import CartRow from "../components/CartRow";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import CartBottomRow from "../components/CartBottomRow";
import { LoginContext } from "./LoginContext";

/*
Function OrderInfo, serves as a confirmation page for the user before they go to the shipping page.
@param properties
*/
function OrderInfo(props) {
  const [order, setOrder] = useState([]);

  const [loggedIn] = useContext(LoginContext);

  const loadData = useCallback(() => {
    getAccountInformation(loggedIn).then((res) => {
      getCart(res.cartID).then((res) => {
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

  const topRowOrder = ["Name", "ID", "Price"];

  var sum = 0;
  order.forEach((item) => {
    sum += item.Price;
    sum = Math.round(sum * 100) / 100;
  });

  return (
    <div>
      <h1 className="personal">Order Information</h1>
      <hr />
      <Row>
        {topRowOrder.map((value) => {
          return (
            <Col key={value}>
              <h2>{value}</h2>
            </Col>
          );
        })}
      </Row>
      {order.map((item) => {
        return (
          <CartRow
            type="order"
            key={item.title}
            name={item.title}
            isbn={item.isbn}
            unit_price={item.Price}
          ></CartRow>
        );
      })}
      <CartBottomRow type="order" sum={sum}></CartBottomRow>
    </div>
  );
}

export default OrderInfo;
