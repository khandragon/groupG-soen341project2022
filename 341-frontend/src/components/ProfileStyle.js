import React from "react";
import "../styles/components/Profile.css";

function ProfileStyle(props) {
  return (
    <div className="profText">
      <a href={props.p}>{props.inp}</a>
    </div>
  );
}

export default ProfileStyle;
