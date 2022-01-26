import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Header from "./Header";
import Container from 'react-bootstrap/Container';
import Name from "./Name";

function Practice(props){
    const navigate = useNavigate();

    Header("Testing component");

    const names = ["Name 1", "Name 2", "Name 3", "Name 4", "Name 5"];
    return(
        <div style={{ display: 'block',
                  width: 700, padding: 50 }}>
      <h4>React-Bootstrap Container Component</h4>
      <Container
        style={{display: 'block',
        width: 700, padding: 50, 
          backgroundColor: 'purple'
        }}
      >
        <h3>Sample Text</h3>
        <script>
            names.array.forEach(element ={">"}{Name(element)}); 
        </script>
    </Container>
      </div>
    )
}