import React from "react";
import "../../styles/components/Button.css";

function IconButton(props) {
  return (
    <div data-testid={props["data-testid"]} className="iconBtn">
      <a href={props.link}>{props.btn}</a>
    </div>
  );
}

export default IconButton;
