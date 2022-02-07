import React from "react";
import { Nav, Navbar, Container, Image } from "react-bootstrap";
import '../styles/components/Header.css';


function Header(props) {
  const items = ["About", "Brands", "Products", "Sale", "Blog"];
  let menuItems = [];
  items.forEach((item) => {
    menuItems.push(<Nav.Link href={item}>{item}</Nav.Link>);
  });

  return (
<Navbar bg="light" expand="lg" className="main-header">
<Image></Image>

  <Container fluid>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="m-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        {menuItems}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )}
export default Header;
