import React from "react";
import "../styles/components/Footer.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <h3>
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: "ContactUs",
          }}
        >
          CONTACT US
        </Link>
      </h3>
    </div>
  );
}

export default Footer;
