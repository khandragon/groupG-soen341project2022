import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ProfileStyle from "../components/ProfileStyle";
//This page allows the user to input their shipping information with which their product will be shipped.
function Shipping(props) {
  var shipInfo = {
    address: "Address",
    city: "City",
    province: "Province",
    country: "Country",
    recipient: "Recipient Name",
  };

  const [shipping, setShipping] = useState({
    address: "",
    city: "",
    province: "",
    country: "",
    recipient: "",
  });
  //The following boolean is used to detect whether the error message should display. Then the following function checks all inputs to see if any are empty.
  const [emptyError, setEmptyError] = useState(false);
  const navigate = useNavigate();

  function checkEmpty() {
    console.log(shipping.address);
    if (
      shipping.address !== "" &&
      shipping.city !== "" &&
      shipping.province !== "" &&
      shipping.country !== "" &&
      shipping.recipient !== ""
    ) {
      setEmptyError(false);
      return true;
    }
    setEmptyError(true);
    return false;
  }
  function changeShipping() {
    if (checkEmpty()) {
      navigate("/Payment");
    }
  }
  function setShippingOption(option, value) {
    setShipping({
      ...shipping,
      [option]: value,
    });
  }
  function move() {
    navigate("/OrderInfo");
  }
  //This is the main code which displays the input fields using a loop.
  let shipItems = [];
  Object.entries(shipInfo).forEach(([key, value], i) => {
    shipItems.push(
      <div key={key}>
        <ProfileStyle
          val={value}
          key={key}
          inp={
            <input
              className={"row" + (i + 1)}
              name={"input#" + (i + 1)}
              type="text"
              size="40"
              value={shipping[key]}
              onChange={(e) => setShippingOption(key, e.target.value)}
            />
          }
        />
        <br />
      </div>
    );
  });
  //This displays the full page.
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Shipping Information</h1>
      {shipItems.map((val, i) => {
        return val;
      })}
      <div className="profile-buttons">
        <Button className="rightButton" type="button" onClick={changeShipping}>
          <h4>Procede to Payment</h4>
        </Button>
        <Button
          data-testId="OrderInfoBtn"
          className="leftButton"
          type="button"
          onClick={move}
        >
          <h4>Back to Order Info</h4>
        </Button>
      </div>
      {emptyError ? (
        <Alert className="loginError" variant={"danger"}>
          ERROR: PLEASE MAKE SURE REQUIRED FIELDS ARE ALL FILLED OUT
        </Alert>
      ) : (
        <></>
      )}
    </div>
  );
}
export default Shipping;
