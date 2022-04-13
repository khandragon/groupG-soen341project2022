import React from "react";
import "../styles/Login.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//This page is displayed when the user first creates an account, it lets them pick which account type to use.
function ProfileType(props) {
  const navigate = useNavigate();
  function onButtonClick() {
    navigate("/Register/Personal");
  }

  function onButtonClick2() {
    navigate("/Register/Buisness");
  }
  //This page includes a description of each type, and a button that leads to each page.
  return (
    <div className="row">
      <h1 className="personal">Select Profile Type</h1>
      <div className="col-md-6 text-center">
        <h2>Personal</h2>
        <p style={{ margin: "10px 100px 20px" }}>
          Personal accounts are for shoppers who want to skip having to re-enter
          personal info whenever making a purchase, or who want access to a
          wishlist or order history features to better track what you'd like to
          buy later.
        </p>
        <Button data-testid="PersonalRegisterBtn" onClick={onButtonClick}>
          Register Personal Account
        </Button>
      </div>
      <div className="col-md-6 text-center">
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
        <Button data-testid="BusinessRegisterBtn" onClick={onButtonClick2}>
          Register Business Account
        </Button>
      </div>
    </div>
  );
}

export default ProfileType;
