import React from "react";
import "../../styles/components/Button.css";

function IconButton(props) {
  return (
    <div className="iconBtn">
      <a href={props.link}>{props.btn}</a>
    </div>
  );
}

export default IconButton;
