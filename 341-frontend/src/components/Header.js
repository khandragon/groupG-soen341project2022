import React, { useContext, useEffect, useState } from "react";
import { Nav, Col, Row, Image, Button } from "react-bootstrap";
import "../styles/components/Header.css";
import logo from "../images/image1.png";
import { BsFillPersonFill, BsFillCartFill } from "react-icons/bs";
import IconButton from "./Buttons/IconButton";
import { getAccountInformation } from "../api/Accounts-Api";
import { useNavigate, Link } from "react-router-dom";
import { LoginContext } from "../containers/LoginContext";

function Header(props) {
  const navigate = useNavigate();

  const [loggedIn, setUserLoggedIn] = useContext(LoginContext);

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
    let isCancelled = false;

    if (loggedIn) {
      getAccountInformation(loggedIn).then((res) => {
        if (isCancelled) return;

        setAccount(res);
      });
    }

    return () => {
      isCancelled = true;
    };
  }, [loggedIn]);

  let items = [
    "Home",
    "About",
    "Categories",
    "Products",
    "Sale",
    "Profile",
    "Cart",
  ];

  if (loggedIn && account.business) {
    items.unshift("My Store");
  }

  if (!loggedIn || account.admin) {
    items.pop();
  }

  function logoutUser() {
    localStorage.removeItem("LoggedIn");
    setUserLoggedIn(null);
    navigate("/");
  }

  let menuItems = [];
  items.forEach((item) => {
    if (item === "Profile") {
      let status = loggedIn ? item : "Login";
      if (loggedIn && account.admin) {
        status = "Admin";
      } else if (loggedIn && account.business) {
        status = "ProfileBusiness";
      }
      menuItems.push(
        <IconButton
          data-testid="PersonalBtn"
          key={status}
          link={"/" + status}
          btn={<BsFillPersonFill size={30} />}
        />
      );
    } else if (item === "Cart") {
      menuItems.push(
        <IconButton
          data-testid="CartBtn"
          key={item}
          link={"/" + item}
          btn={<BsFillCartFill size={30} />}
        />
      );
    } else if (item === "Home") {
      menuItems.push(
        <Nav.Link key={item} as={Link} to={"/"}>
          {item}
        </Nav.Link>
      );
    } else if (item === "My Store") {
      menuItems.push(
        <Nav.Link
          key={item}
          data-testid="StoreBtn"
          onClick={() =>
            navigate("/BuisnessProducts", {
              state: { type: "buisness", creator: account.full_name },
            })
          }
        >
          {item}
        </Nav.Link>
      );
    } else {
      menuItems.push(
        <Nav.Link
          key={item}
          as={Link}
          to={`/${item}`}
          data-testid={`${item}-Header`}
        >
          {item}
        </Nav.Link>
      );
    }
  });

  return (
    <div className="main-header">
      {loggedIn ? (
        <p data-testid="loginStatus">Hello {loggedIn}</p>
      ) : (
        <a href="/Login">Login</a>
      )}
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
