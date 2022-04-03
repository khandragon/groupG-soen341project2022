import React, { useEffect, useState } from "react";
import { Nav, Col, Row, Image, Button } from "react-bootstrap";
import "../styles/components/Header.css";
import logo from "../images/image1.png";
import { BsFillPersonFill, BsFillCartFill } from "react-icons/bs";
import IconButton from "./Buttons/IconButton";
import { getAccountInformation } from "../api/Accounts-Api";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();

  const [loggedIn, setUserLoggedIn] = useState(
    localStorage.getItem("LoggedIn")
  );

  const [account, setAccount] = useState({
    username: "",
    email: "",
    business: false,
    full_name: "",
    business_name: null,
    address: "",
    phone_number: "",
    cartID: 0,
  });

  useEffect(() => {
    if (loggedIn) {
      getAccountInformation(loggedIn).then((res) => {
        setAccount(res);
      });
    }
  }, [loggedIn]);

  let items = [
    "Home",
    "About",
    "Brands",
    "Products",
    "Sale",
    "Profile",
    "Cart",
  ];

  if (loggedIn && account.business) {
    items.unshift("My Products");
  }

  function logoutUser() {
    localStorage.removeItem("LoggedIn");
    setUserLoggedIn(false);
    navigate("/");
  }

  let menuItems = [];
  items.forEach((item) => {
    if (item === "Profile") {
      let status = loggedIn ? item : "Login";
      if (loggedIn && account.business) {
        status = "ProfileBusiness";
      }
      menuItems.push(
        <IconButton
          key={status}
          link={"/" + status}
          btn={<BsFillPersonFill size={30} />}
        />
      );
    } else if (item === "Cart") {
      menuItems.push(
        <IconButton
          key={item}
          link={"/" + item}
          btn={<BsFillCartFill size={30} />}
        />
      );
    } else if (item === "Home") {
      menuItems.push(
        <Nav.Link key={item} href={"/"}>
          {item}
        </Nav.Link>
      );
    } else if (item === "My Products") {
      menuItems.push(
        <Nav.Link key={item} href={"/BuisnessProducts"}>
          {item}
        </Nav.Link>
      );
    } else {
      menuItems.push(
        <Nav.Link key={item} href={"/" + item}>
          {item}
        </Nav.Link>
      );
    }
  });

  return (
    <div className="main-header">
      {loggedIn ? <p>Hello {loggedIn}</p> : <a href="/Login">Login</a>}
      {loggedIn ? <Button onClick={logoutUser}>Logout</Button> : <></>}

      <Nav.Link href={"/"}>
        <Image src={logo} className="header-item"></Image>
      </Nav.Link>
      <Row className="d-flex justify-content-center">
        <Col xs lg="1"></Col>
        <Col lg="8" className="header-list">
          <Nav justify>{menuItems}</Nav>
        </Col>
        <Col xs lg="1"></Col>
      </Row>
    </div>
  );
}
export default Header;
