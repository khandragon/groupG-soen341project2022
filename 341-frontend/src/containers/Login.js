import React, { useContext, useState } from "react";
import "../styles/Login.css";
import { Alert, Button, Nav } from "react-bootstrap";
import ProfileStyle from "../components/ProfileStyle";
import { getUserByUsername } from "../api/Users-Api";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "./LoginContext";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [, setUserLoggedIn] = useContext(LoginContext);

  const navigate = useNavigate();

  function loginUser() {
    let isCancelled = false;

    getUserByUsername(username)
      .then((res) => {
        if (isCancelled) return;

        if (res.password === password) {
          setLoginError(false);
          localStorage.setItem("LoggedIn", res.username);
          setUserLoggedIn(res.username);
          navigate("/");
          // window.location.reload();
        } else {
          setLoginError(true);
        }
      })
      .catch((e) => {
        console.log(e);
        setLoginError(true);
      });
    return () => {
      isCancelled = true;
    };
  }

  return (
    <div>
      <h1 data-testid="LoginHeader" className="personal">
        Login
      </h1>

      <ProfileStyle
        val={"Username"}
        key={"Username"}
        inp={
          <input
            className={"row4"}
            type="text"
            size="40"
            value={username}
            data-testid="LoginUserIn"
            onChange={(e) => setUsername(e.target.value)}
          />
        }
      />
      <ProfileStyle
        val={"Password"}
        key={"Password"}
        inp={
          <input
            className={"row4"}
            type="text"
            size="40"
            data-testid="LoginPassIn"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        }
      />
      {loginError ? (
        <Alert className="loginError" variant={"danger"}>
          ERROR: PLEASE DOUBLE CHECK THE FIELDS FOR TYPOS OR MISSING INFORMATION
        </Alert>
      ) : (
        <></>
      )}
      <div className="signLink">
        <Nav.Link
          data-testid="RegisterLinkBtn"
          key={"RegisterLinkBtn"}
          as={Link}
          to={"/ProfileType"}
        >
          <u>Register</u>
        </Nav.Link>
      </div>

      <Button
        data-testid="LoginAccBtn"
        className="loginBtn"
        type="button"
        onClick={loginUser}
      >
        <h4>Login</h4>
      </Button>
    </div>
  );
}

export default Login;
