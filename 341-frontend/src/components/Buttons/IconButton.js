import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/Button.css";

function IconButton(props) {
  return (
    <div className="iconBtn">
      <Link data-testid={props["data-testid"]} to={props.link}>
        {props.btn}
      </Link>
    </div>
  );
}

export default IconButton;
