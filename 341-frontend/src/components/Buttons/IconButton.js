import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/Button.css";

function IconButton(props) {
  return (
    <div data-testid={props["data-testid"]} className="iconBtn">
      <Link to={props.link}>{props.btn}</Link>
    </div>
  );
}

export default IconButton;
