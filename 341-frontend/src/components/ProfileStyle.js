import React from "react";
import "../styles/components/Profile.css";

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
