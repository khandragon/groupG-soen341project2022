import React, { useEffect, useState } from "react";
import "../styles/About.css";
import "../styles/components/Profile.css";
import ProfileStyle from "../components/ProfileStyle";
import { Button } from "react-bootstrap";
import { getAccountInformation } from "../api/Accounts-Api";
import { useNavigate } from "react-router-dom";

//This function display prfile bussiness page
function ProfileBusiness(props) {
  const navigate = useNavigate();

  // setAccount needed to modify the data
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

  const [description, setDescription] = useState(
    "Tell the customers about your business...."
  );

  // useEffect is used to hadle data from database
  useEffect(() => {
    const loggedIn = localStorage.getItem("LoggedIn");
    getAccountInformation(loggedIn).then((res) => {
      setAccount(res);
    });
  }, []);

  function changeBuisnessInformation() {
    console.log("change");
  }

  const profInfo = {
    full_name: "Name",
    phone_number: "Phone Number",
    address: "Address",
    email: "Email",
  };

  // Array profItems will be used in the return statement
  let profItems = [];
  Object.entries(profInfo).forEach(([key, value], i) => {
    profItems.push(
      <div key={key}>
        <ProfileStyle
          val={value}
          key={key}
          inp={
            <input
              className={"row" + (i + 1)}
              type="text"
              size="40"
              value={account[key]}
            />
          }
        />
        <br />
      </div>
    );
  });

  // This return will display all required features and buttons
  return (
    <div>
      <h3 className="personal">Your Buisness Profile </h3>
      <form>
        {profItems.map((val, i) => {
          return val;
        })}
        ;<h4 className="profText">Description</h4>
        <br />
        <br />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <div className="profile-buttons">
          <Button
            className="leftButton"
            type="button"
            onClick={() => navigate("/BuisnessProducts")}
          >
            <h4>Products</h4>
          </Button>
          <Button
            className="leftButton"
            type="button"
            onClick={() => navigate("/OrderHistory")}
          >
            <h4>Order History</h4>
          </Button>
          <Button
            className="rightButton"
            type="button"
            onClick={changeBuisnessInformation}
          >
            <h4>Save</h4>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProfileBusiness;
