import React from "react";
import "../styles/About.css";
import "../styles/components/Profile.css";
import ProfileStyle from "../components/ProfileStyle";
import { Button } from "react-bootstrap";
import { getAccountInformation } from "../api/Accounts-Api";

function Profile(props) {
  function makeCall(e) {
    console.log(getAccountInformation("mbugge0"));
  }

  const tempProfile = {
    username: "mbugge0",
    email: "mbugge0@gizmodo.com",
    business: false,
    full_name: "Cameron Bussen",
    business_name: null,
    address: "42 School Alley",
    phone_number: "2989887772",
    cartID: 44715,
  };

  const passInfo = ["Old Password", "New Password", "Confirm New Password"];
  const profInfo = {
    full_name: "Full Name",
    phone_number: "Phone Number",
    email: "Email",
  };

  let profItems = [];
  Object.entries(profInfo).forEach(([key, value], i) => {
    profItems.push(
      <>
        <ProfileStyle
          val={value}
          key={key}
          inp={<input className={"row" + (i + 1)} type="text" size="40" />}
        />
        <br />
      </>
    );
  });

  return (
    <div>
      <p className="personal">
        <h3>Your Personal Profile</h3>
      </p>
      <form>
        {profItems.map((val, i) => {
          return val;
        })}
        ;
        <br />
        <h3 className="personalP">Reset Your Password</h3>
        {passInfo.map((val, i) => {
          return (
            <>
              <ProfileStyle
                val={val}
                inp={
                  <input
                    className={"row" + (i + 4)}
                    type="password"
                    size="40"
                  />
                }
              />
              <br />
            </>
          );
        })}
        <hr />
        <div className="profile-buttons">
          <Button className="leftButton" type="button" onClick={makeCall}>
            <h4>Order History</h4>
          </Button>
          <Button className="rightButton" type="submit">
            <h4>Save</h4>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
