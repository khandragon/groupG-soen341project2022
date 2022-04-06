import "../styles/About.css";
import React, { useEffect, useState } from "react";
import "../styles/About.css";
import "../styles/components/Profile.css";
import ProfileStyle from "../components/ProfileStyle";
import { Button } from "react-bootstrap";
import { getAccountInformation } from "../api/Accounts-Api";
import { useNavigate } from "react-router-dom";

function Admin(props) {
  const navigate = useNavigate();

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

  useEffect(() => {
    const loggedIn = localStorage.getItem("LoggedIn");
    getAccountInformation(loggedIn).then((res) => {
      setAccount(res);
    });
  }, []);

  function setAccountOption(option, value) {
    setAccount({
      ...account,
      [option]: value,
    });
  }

  function changeBuisnessInformation() {
    console.log("change");
  }

  const profInfo = {
    full_name: "Name",
    phone_number: "Phone Number",
    email: "Email",
  };

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

  return (
    <div>
      <h3 className="personal">Admin </h3>
      <form>
        {profItems.map((val, i) => {
          return val;
        })}
        <br />
        <br />
        <div className="profile-buttons">
          <Button
            className="leftButton"
            type="button"
            onClick={() =>
              navigate("/BuisnessProducts", {
                state: { type: "admin" },
              })
            }
          >
            <h4>Products</h4>
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

export default Admin;
