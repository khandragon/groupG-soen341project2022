import React, { useEffect, useState } from "react";
import CartRow from "../components/CartRow";
import CartBottomRow from "../components/CartBottomRow";
import CartTopRow from "../components/CartTopRow";
import "../styles/Cart.css";
import { getCart } from "../api/Carts-Api";
import { getAccountInformation } from "../api/Accounts-Api";
import {
  getMultipleProductsByIsbn,
  getProductByIsbn,
} from "../api/Products-Api";

function Cart(prods) {
  const [cart, setCart] = useState([]);

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

  const [loggedIn, setUserLoggedIn] = useState(
    localStorage.getItem("LoggedIn")
  );

  function loadData() {
    getAccountInformation(loggedIn).then((res) => {
      setAccount(res);
      getCart(res.cartID).then((res) => {
        let cart = [];
        getMultipleProductsByIsbn(res.productsByIsbn).then((res) => {
          setCart(res);
        });
      });
    });
  }

  useEffect(() => {
    if (loggedIn) {
      loadData();
    }
  }, []);

  function onDelete() {
    loadData().then(() => window.location.reload());
  }

  var sum = 0;

  cart.map((item) => {
    sum += item.Price;
    sum = Math.round(sum * 100) / 100;
  });

  return (
    <div>
      <h1 className="cart-header">My Cart</h1>
      <hr />
      <CartTopRow></CartTopRow>
      {cart.map((testObject) => {
        return (
          <CartRow
            onDelete={onDelete}
            cartID={account.cartID}
            key={testObject.title}
            name={testObject.title}
            isbn={testObject.isbn}
            unit_price={testObject.Price}
          ></CartRow>
        );
      })}
      <CartBottomRow sum={sum}></CartBottomRow>
    </div>
  );
}

export default Cart;
