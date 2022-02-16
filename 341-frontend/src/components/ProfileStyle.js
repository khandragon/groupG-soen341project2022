import React from "react";
import "../styles/components/Profile.css";

function ProfileStyle(props) {
  return (
    <div>
      <h4>{props.val}</h4>
      <div>
        <a href={props.p}>{props.inp}</a>
      </div>
    </div>
  );
}

export default ProfileStyle;
