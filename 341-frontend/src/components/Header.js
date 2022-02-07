import React from "react";
import { Nav, Navbar, NavDropdown,Container,Form, FormControl,Button } from "react-bootstrap";

function Header(props) {
  const items = ["About", "Brands", "Products", "Sale", "Blog"];
  let menuItems = [];
  items.forEach((item) => {
    menuItems.push(<Nav.Link href={item}>{item}</Nav.Link>);
  });

  return (
<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        {menuItems}
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )}
export default Header;
