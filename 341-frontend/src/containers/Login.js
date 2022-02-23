import React, { useState } from "react";
import "../styles/Login.css";
import { Alert, Button } from "react-bootstrap";
import ProfileStyle from "../components/ProfileStyle";
import { getUserByUsername } from "../api/Users-Api";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  function loginUser() {
    getUserByUsername(username)
      .then((res) => {
        if (res.password === password) {
          setLoginError(false);
          localStorage.setItem("LoggedIn", res.username);
          navigate("/");
          window.location.reload();
        } else {
          setLoginError(true);
        }
      })
      .catch((e) => {
        setLoginError(true);
      });
  }

  return (
    <div>
      <ProfileStyle
        val={"Username"}
        key={"Username"}
        inp={
          <input
            className={"row4"}
            type="text"
            size="40"
            value={username}
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
        <a href="/Register">Register</a>
      </div>
      <Button className="loginBtn" type="button" onClick={loginUser}>
        <h4>Login</h4>
      </Button>
    </div>
  );
}

export default Login;
