import React from "react";
import "../styles/About.css";
import "../styles/components/Profile.css";
import { Button } from "react-bootstrap";
import ProfileStyle from "../components/ProfileStyle";

function Profile(props) {
  /* function onButtonClick() {
    console.log("clicked button");
  }*/
  const profInfo = ["Full Name", "Phone Number", "Email"];
  return (
    <div>
      <p className="personal">
        <h3>Your personal profile</h3>
      </p>
      <form>
        {profInfo.map((val, i) => {
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
      </form>
    </div>
  );
}

export default Profile;
