import React from "react";
import CartRow from "../components/CartRow";
import CartBottomRow from "../components/CartBottomRow";
import CartTopRow from "../components/CartTopRow";
import '../styles/Cart.css';

function Cart(prods) {
    var test = {
        name: "To Kill a Mockingbird",
        id: "563179",
        quantity: "2",
        unit_price: 12.5, // Double or integer value, not a string
    };

    const cartTest = [test, test, test, test, test, test, test, test, test];
    var sum = 0;

    cartTest.map((item) => {
        sum += item.unit_price;
    })

    return (
        <div>
            <h1 class = "cart-header">My Cart</h1>
            <hr />
            <CartTopRow></CartTopRow>
            {cartTest.map((testObject) => {
                return (
                    <CartRow
                        name = {testObject.name}
                        id = {testObject.id}
                        quantity = {testObject.quantity}
                        unit_price = {testObject.unit_price}>
                    </CartRow>
                )
            })}
            <CartBottomRow sum = {sum}></CartBottomRow>
        </div>
    );
}

export default Cart;