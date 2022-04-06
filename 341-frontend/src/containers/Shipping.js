import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ProfileStyle from "../components/ProfileStyle";

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

  const [emptyError, setEmptyError] = useState(false);
  const navigate = useNavigate();

  function checkEmpty() {
    if (
      shipping[0] !== "" &&
      shipping[1] !== "" &&
      shipping[2] !== "" &&
      shipping[3] !== "" &&
      shipping[4] !== ""
    ) {
      setEmptyError(false);
      return true;
    }
    setEmptyError(true);
    return false;
  }
  function changeShipping() {
    if (checkEmpty()) {
      console.log("navigate(/PayementInfo)");
    }
  }

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
            />
          }
        />
        <br />
      </div>
    );
  });

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Shipping Information</h1>
      {shipItems.map((val, i) => {
        return val;
      })}

      <Button className="rightButton" type="button" onClick={changeShipping}>
        <h4>Procede to Payment</h4>
      </Button>
      <Button
        className="leftButton"
        type="button"
        onClick={console.log("navigate(/OrderInfo)")}
      >
        <h4>Back to Order Info</h4>
      </Button>
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
