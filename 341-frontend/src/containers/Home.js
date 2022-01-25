import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import About from "./About";

function Home(props) {
  const navigate = useNavigate();

  function onButtonClick() {
    console.log("to about");
    navigate("/about");
  }

  // function practice() {
  //   let array = [];
  //   ["saad", "yulia", "yason"].forEach((name) => {
  //     console.log(name);
  //     array.push(<About myuser={name} />);
  //   });
  //   return array;
  // }

  return (
    <div>
      <p>Hello Users</p>
      {/* {practice()} */}
      <Button onClick={onButtonClick}>Click</Button>
      <Button variant="secondary">Secondary</Button>{' '}
    </div>
  );
}

export default Home;
