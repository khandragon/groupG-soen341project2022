import React from "react";
import "../styles/components/Profile.css";

// This function is for the style of the fields
function ProfileStyle(props) {
  return (
    <div>
      <h4 className="profText">{props.val}</h4>
      <a href={props.p} className="profBox">
        {props.inp}
      </a>
    </div>
  );
}

export default ProfileStyle;
