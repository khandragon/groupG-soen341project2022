import React, { useCallback, useEffect, useState } from "react";
import CartRow from "../components/CartRow";
import CartBottomRow from "../components/CartBottomRow";
import CartTopRow from "../components/CartTopRow";
import "../styles/Cart.css";
import { getCart, removeFromCart } from "../api/Carts-Api";
import { getAccountInformation } from "../api/Accounts-Api";
import { getMultipleProductsByIsbn } from "../api/Products-Api";
import { Alert } from "react-bootstrap";

/*
Function Cart, implements components CartRow, CartBottomRow, CartTopRow. Displays a table with the products the user selected
with the proper attributes. Is linked to OrderInfo.js
@param properties
*/
function Cart(props) {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  const [account, setAccount] = useState({
    username: "",
    email: "",
    business: false,
    full_name: "",
    business_name: null,
    address: "",
    phone_number: "",
    cartID: 0,
  });

  const loggedIn = localStorage.getItem("LoggedIn");

  const loadData = useCallback(() => {
    getAccountInformation(loggedIn).then((res) => {
      setAccount(res);
      getCart(res.cartID).then((res) => {
        getMultipleProductsByIsbn(res.productsByIsbn).then((res) => {
          setCart(res);
        });
      });
    });
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      loadData();
    }
  }, [loggedIn, loadData]);

  function onDelete(removeIsbn) {
    setShow(true);
    removeFromCart(account.cartID, removeIsbn).then((res) => {
      loadData();
    });
  }

  var sum = 0;
  cart.forEach((item) => {
    sum += item.Price;
    sum = Math.round(sum * 100) / 100;
  });

  return (
    <div>
      <h1 className="personal">My Cart</h1>
      <hr />
      <CartTopRow></CartTopRow>
      {cart.map((item) => {
        return (
          <CartRow
            onDelete={onDelete}
            cartID={account.cartID}
            key={item.title}
            name={item.title}
            isbn={item.isbn}
            unit_price={item.Price}
          ></CartRow>
        );
      })}
      <div className="alert-holder">
        <Alert
          show={show}
          onClose={() => setShow(false)}
          dismissible
          transition
          variant="danger"
        >
          <Alert.Heading>Deleted from Cart</Alert.Heading>
        </Alert>
      </div>
      <CartBottomRow sum={sum}></CartBottomRow>
    </div>
  );
}

export default Cart;
