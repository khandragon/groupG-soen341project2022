import React, { useState, useEffect } from "react";
import "../styles/About.css";
import "../styles/components/Profile.css";
import { Alert, Button } from "react-bootstrap";
import "../styles/Login.css";

// This function displays oredr confirmation
function OrderConfirmation(props) {
  const [order, setOrder] = useState("");
  const [confirmationError, setConfirmationError] = useState(false);

  // useEffect automatically decides if there is order confirmation or not by implementing conditions
  useEffect(() => {
    setOrder("45643");
    if (order !== "") {
      setConfirmationError(false);
    } else {
      setConfirmationError(true);
    }
  }, [order]); // <-- empty dependency array

  // If there is no confirmation number alert will display the message, otherwise it will print the confirmation number
  return (
    <div>
      <form>
        {confirmationError ? (
          <>
            <Alert className="loginError" variant={"danger"}>
              Failed to place your order. Please go back and review your
              information.
            </Alert>
            <br></br>
            <br></br>
            <div className="profile-buttons">
              <Button className="rightButton" type="button">
                <h4>Back</h4>
              </Button>
              <br></br>
            </div>
          </>
        ) : (
          <>
            <h3 className="pay">Your Order Has Been Successfully Placed!</h3>
            <p className="lineP"></p>
            <br></br>
            <h3 className="pay">
              Your order number is {order}, a confirmation number has been sent
              to your email!
            </h3>
          </>
        )}
        <br />
        <hr />
      </form>
    </div>
  );
}

export default OrderConfirmation;
