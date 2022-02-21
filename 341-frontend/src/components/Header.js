import React from "react";
import { Nav, Col, Row, Image } from "react-bootstrap";
import "../styles/components/Header.css";
import logo from "../images/image1.png";
import { BsFillPersonFill, BsFillCartFill } from "react-icons/bs";
import IconButton from "./Buttons/IconButton";

function Header(props) {
  const items = [
    "About",
    "Brands",
    "Products",
    "Sale",
    "Blog",
    "Profile",
    "Cart",
  ];

  let menuItems = [];
  items.forEach((item) => {
    if (item === "Profile") {
      menuItems.push(
        <IconButton link={"/" + item} btn={<BsFillPersonFill size={30} />} />
      );
    } else if (item === "Cart") {
      menuItems.push(
        <IconButton link={"/" + item} btn={<BsFillCartFill size={30} />} />
      );
    } else {
      menuItems.push(<Nav.Link href={"/" + item}>{item}</Nav.Link>);
    }
  });

  return (
    <div className="main-header">
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
