import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import About from "./About";
import UserStories from "./User Stories";


function Home(props) {
  const navigate = useNavigate();

  function onButtonClick() {
    console.log("to about");
    navigate("/about");
  }

  function onButtonClick2(){
    console.log("to user stories");
    navigate("/user stories");
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
      <Button onClick={onButtonClick2}>User Stories</Button>
    </div>
  );
}

export default Home;
