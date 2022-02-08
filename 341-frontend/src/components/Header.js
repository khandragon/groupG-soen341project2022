import React from "react";
import { Nav, Col, Row, Image } from "react-bootstrap";
import "../styles/components/Header.css";
import logo from "../images/image1.png";
import { BsFillPersonFill, BsFillCartFill } from "react-icons/bs";

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
        <div className="iconBtn">
          <a href={item}>
            <BsFillPersonFill size={30} />
          </a>
        </div>
      );
    } else if (item === "Cart") {
      menuItems.push(
        <div className="iconBtn">
          <a href={item}>
            <BsFillCartFill size={30} />
          </a>
        </div>
      );
    } else {
      menuItems.push(<Nav.Link href={item}>{item}</Nav.Link>);
    }
  });

  return (
    <div className="main-header">
      <Image src={logo} className="header-item"></Image>
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
