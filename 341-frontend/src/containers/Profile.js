import React, { useContext, useEffect, useState } from "react";
import "../styles/About.css";
import "../styles/components/Profile.css";
import ProfileStyle from "../components/ProfileStyle";
import { Button } from "react-bootstrap";
import { getAccountInformation } from "../api/Accounts-Api";
import { getUserByUsername, updateUser } from "../api/Users-Api";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./LoginContext";

// This function collects personal information and sets the password
function Profile(props) {
  const navigate = useNavigate();
  const [loggedIn] = useContext(LoginContext);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

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

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");

  // This function checks if the password is setted properly
  function changePasswordClick(e) {
    if (currentPassword === user.password && newPassword2 === newPassword) {
      updateUser(user.username, {
        username: user.username,
        password: newPassword2,
      });
    }
  }

  // useEffect is used to hadle data from database

  function setAccountOption(option, value) {
    setAccount({
      ...account,
      [option]: value,
    });
  }

  useEffect(() => {
    let isCancelled = false;

    getAccountInformation(loggedIn).then((res) => {
      if (isCancelled) return;

      setAccount(res);
    });

    getUserByUsername(loggedIn).then((res) => {
      if (isCancelled) return;

      setUser(res);
    });
    return () => {
      isCancelled = true;
    };
  }, [loggedIn]);

  const profInfo = {
    full_name: "Full Name",
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
              onChange={(e) => setAccountOption(key, e.target.value)}
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
      <h3 className="personal">Your Personal Profile</h3>
      <br />
      <form>
        {profItems.map((val, i) => {
          return val;
        })}
        ;
        <br />
        <h3 className="personalP">Reset Your Password</h3>
        <ProfileStyle
          val={"Current Password"}
          inp={
            <input
              className={"row4"}
              type="password"
              size="40"
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          }
        />
        <br />
        <ProfileStyle
          val={"New Password"}
          inp={
            <input
              className={"row5"}
              type="password"
              size="40"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          }
        />
        <br />
        <ProfileStyle
          val={"Confirm New Password"}
          inp={
            <input
              className={"row6"}
              type="password"
              size="40"
              onChange={(e) => setNewPassword2(e.target.value)}
            />
          }
        />
        <br />
        <hr />
        <div className="profile-buttons">
          <Button
            className="leftButton"
            type="button"
            onClick={() => navigate("/OrderHistory")}
            data-testid="OrderHistoryBtn"
          >
            <h4>Order History</h4>
          </Button>
          <Button
            className="rightButton"
            type="button"
            onClick={changePasswordClick}
          >
            <h4>Save</h4>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
