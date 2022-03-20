import React, { useState } from "react";
import { Nav, Col, Row, Image, Button } from "react-bootstrap";
import "../styles/components/Header.css";
import logo from "../images/image1.png";
import { BsFillPersonFill, BsFillCartFill } from "react-icons/bs";
import IconButton from "./Buttons/IconButton";

function Header(props) {
  const [loggedIn, setUserLoggedIn] = useState(
    localStorage.getItem("LoggedIn")
  );

  const items = [
    "Home",
    "About",
    "Brands",
    "Products",
    "Sale",
    "Blog",
    "Profile",
    "Cart",
  ];

  function logoutUser() {
    localStorage.removeItem("LoggedIn");
    setUserLoggedIn(false);
    window.location.reload();
  }

  let menuItems = [];
  items.forEach((item) => {
    if (item === "Profile") {
      const status = loggedIn ? item : "Login";
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
