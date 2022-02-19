import React from "react";
import "../styles/About.css";
import "../styles/components/Profile.css";
import { Button } from "react-bootstrap";
import ProfileStyle from "../components/ProfileStyle";

function ProfileBusiness(props) {
  /* function onButtonClick() {
    console.log("clicked button");
  }*/
  const profBusn = ["Name", "City", "Address", "Phone Number", "Email"];
  return (
    <div>
      <p className="personal">
        <h3>Your Business Profile</h3>
      </p>
      <form>
        {profBusn.map((val, i) => {
          return (
            <>
              <ProfileStyle
                val={val}
                inp={
                  <input className={"row" + (i + 1)} type="text" size="40" />
                }
              />
              <br />
            </>
          );
        })}
        <br />

        <h4 className="profText">Description</h4>
        <br />
        <br />
        <textarea>Tell the customer about your business....</textarea>
        <button type="submit">
          <h4>Start Selling</h4>
        </button>

        <footer>
          <h3 className="personalFB">CONTACT US</h3>
        </footer>
      </form>
    </div>
  );
}

export default ProfileBusiness;
