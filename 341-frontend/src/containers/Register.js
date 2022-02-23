import React, { useState } from "react";
import "../styles/Register.css";
import { Alert, Button } from "react-bootstrap";
import ProfileStyle from "../components/ProfileStyle";
import { createNewUserAccount } from "../api/Accounts-Api";
import { createUser } from "../api/Users-Api";
import { useNavigate } from "react-router-dom";

function Register(props) {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [registerError, setRegisterError] = useState(false);
  const navigate = useNavigate();

  function RegisterUser() {
    console.log("clicked button");
    console.log(password);
    try {
      createNewUserAccount({
        username: username,
        email: email,
        business: false,
        full_name: firstname + " " + lastname,
        address: address,
        phone: phone,
      }).then((res) => {
        createUser({
          username: username,
          password: password,
        });
      });
      setRegisterError(false);
      navigate("/Login");
    } catch {
      setRegisterError(true);
    }
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
      />{" "}
      <ProfileStyle
        val={"First Name"}
        key={"First Name"}
        inp={
          <input
            className={"row4"}
            type="text"
            size="40"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        }
      />
      <ProfileStyle
        val={"Last Name"}
        key={"Last Name"}
        inp={
          <input
            className={"row4"}
            type="text"
            size="40"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        }
      />
      <ProfileStyle
        val={"Email"}
        key={"Email"}
        inp={
          <input
            className={"row4"}
            type="text"
            size="40"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        }
      />
      <ProfileStyle
        val={"Address"}
        key={"Address"}
        inp={
          <input
            className={"row4"}
            type="text"
            size="40"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        }
      />
      <ProfileStyle
        val={"Phone Number"}
        key={"Phone Number"}
        inp={
          <input
            className={"row4"}
            type="text"
            size="40"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
      />{" "}
      {registerError ? (
        <Alert className="loginError" variant={"danger"}>
          ERROR: PLEASE DOUBLE CHECK THE FIELDS FOR TYPOS OR MISSING INFORMATION
        </Alert>
      ) : (
        <></>
      )}
      <div className="signLink">
        <a href="/Login">Login</a>
      </div>
      <Button className="loginBtn" type="button" onClick={RegisterUser}>
        <h4>Register</h4>
      </Button>{" "}
    </div>
  );
}

export default Register;
