import React from "react";
import "../styles/About.css";
import "../styles/components/Profile.css";
import { Button } from "react-bootstrap";
import ProfileStyle from "../components/ProfileStyle";
import ProfileBusiness from "./ProfileBusiness";

function Profile(props) {
  /* function onButtonClick() {
    console.log("clicked button");
  }*/

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
  return (
    <div>
      <p className="personal">
        <h3>Your Personal Profile</h3>
      </p>
      <form>
        {Object.entries(profInfo).forEach(([key, value], i) => {
          <>
            <ProfileStyle
              val={value}
              inp={<input className={"row" + (i + 1)} type="text" size="40" />}
            />
            <br />
          </>;
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
        <hr></hr>
        <button type="submit">
          <h4>Save</h4>
        </button>
        <button class="leftButton" type="button">
          <h4>Order History</h4>
        </button>
        <footer>
          <a href="./containers/ProfileBusiness.js">
            <h3 className="personalFC">Switch to Business Account</h3>
          </a>
          <h3 className="personalFB">CONTACT US</h3>
          <h3 className="personalFR">Log Out</h3>
        </footer>
      </form>
    </div>
  );
}

export default Profile;
