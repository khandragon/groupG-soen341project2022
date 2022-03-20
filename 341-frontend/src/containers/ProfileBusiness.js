import React from "react";
import "../styles/About.css";
import "../styles/components/Profile.css";
import ProfileStyle from "../components/ProfileStyle";
import { Button } from "react-bootstrap";

function ProfileBusiness(props) {
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
        <br></br>
        <br></br>
        <br></br>
        <div className="profile-buttons">
          <Button className="rightButton" type="button">
            <h4>Start Selling</h4>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProfileBusiness;
