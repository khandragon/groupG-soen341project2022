import React, { useState } from "react";
import "../styles/About.css";
import "../styles/components/Profile.css";
import ProfileStyle from "../components/ProfileStyle";
import { Alert, Button } from "react-bootstrap";
import { updateUser } from "../api/Users-Api";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

// This function collects payment information and modifying it by using useState
function Payment(props) {
  const navigate = useNavigate();

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [ccv, setccv] = useState("");
  const [paymentError, setPaymentError] = useState(false);

  // This function will signal alert if any fields are not filled
  function changePaymentClick(e) {
    if (cardName === "" || cardNumber === "" || expDate === "" || ccv === "") {
      setPaymentError(true);
    } else {
      // updateUser(cardName, cardNumber, expDate, ccv);
      setPaymentError(false);
      navigate("/OrderConfirmation");
    }
  }

  function move() {
    navigate("/Shipping");
  }

  // This return display all the required fields and alert if any of the fields are missed
  return (
    <div>
      <h3 className="pay">Payment information</h3>
      <p className="lineP"></p>
      <form>
        <br />
        <ProfileStyle
          val={"Credit Card Holder Name"}
          inp={
            <input
              className={"row1pay"}
              type="text"
              size="40"
              onChange={(e) => setCardName(e.target.value)}
            />
          }
        />
        <br />
        <ProfileStyle
          val={"Card Number"}
          inp={
            <input
              className={"row2pay"}
              type="text"
              size="40"
              onChange={(e) => setCardNumber(e.target.value)}
            />
          }
        />
        <br />
        <ProfileStyle
          val={"Expiration Date(MM/YY)"}
          inp={
            <input
              className={"row3pay"}
              type="text"
              size="40"
              onChange={(e) => setExpDate(e.target.value)}
            />
          }
        />
        <br />
        <ProfileStyle
          val={"CCV"}
          inp={
            <input
              className={"row4pay"}
              type="text"
              size="40"
              onChange={(e) => setccv(e.target.value)}
            />
          }
        />
        {paymentError ? (
          <Alert className="loginError" variant={"danger"}>
            ERROR: PLEASE DOUBLE CHECK THE FIELDS FOR TYPOS OR MISSING
            INFORMATION
          </Alert>
        ) : (
          <></>
        )}
        <br />
        <hr />
        <div className="profile-buttons">
          <Button className="leftButton" type="button" onClick={move}>
            <h4>Back</h4>
          </Button>
          <Button
            className="rightButtonPay"
            type="button"
            onClick={changePaymentClick}
          >
            <h4>Place the Order</h4>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Payment;
