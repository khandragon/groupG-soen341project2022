import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Shipping(props) {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [recipient, setRecipient] = useState("");

  const navigate = useNavigate();

  return <h1 style={{ textAlign: "center" }}>Shipping Information</h1>;
}
export default Shipping;
