import React, { useState } from "react";
import "../styles/About.css";
import "../styles/components/Profile.css";
import ProfileStyle from "../components/ProfileStyle";
import { Button } from "react-bootstrap";

function ProfileBusiness(props) {
  const [description, setDescription] = useState(
    "Tell the customer about your business...."
  );

  const profBusn = ["Name", "City", "Address", "Phone Number", "Email"];

  function submitData(e) {
    console.log(description);
  }

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
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* <textarea>Tell the customer about your business....</textarea> */}
        <br></br>
        <br></br>
        <br></br>
        <div className="profile-buttons">
          <Button className="rightButton" type="button" onClick={submitData}>
            <h4>Start Selling</h4>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProfileBusiness;
