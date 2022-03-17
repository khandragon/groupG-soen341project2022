import React, { useState } from "react";
import "../styles/Login.css";
import { Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProfileType(props) {
  const navigate = useNavigate();
  function onButtonClick() {
    navigate("/Register");
  }

  function onButtonClick2() {
    navigate("/Register");
  }

  return (
    <div class="row">
      <h1 style={{ textAlign: "center" }}>Select Profile Type</h1>
      <div class="col-md-6 text-center">
        <h2>Personal</h2>
        <p style={{ margin: "10px 100px 20px" }}>
          Personal accounts are for shoppers who want to skip having to re-enter
          personal info whenever making a purchase, or who want access to a
          wishlist or order history features to better track what you'd like to
          buy later.
        </p>
        <Button onClick={onButtonClick}>Register Personal Account</Button>
      </div>
      <div class="col-md-6 text-center">
        <h2>Business</h2>
        <p style={{ margin: "10px 100px 20px" }}>
          Business accounts are for businesses who wish to sell their products
          on our store front. In exchange for additional information and
          confirmation, you will be able to put up for sale and track the
          purchases of your products on our website, with the revenue directly
          depositted in your company bank account when received. All items you
          sell can have their pricing and details changed to better suit the
          market.
        </p>
        <Button onClick={onButtonClick2}>Register Business Account</Button>
      </div>
    </div>
  );
}

export default ProfileType;
