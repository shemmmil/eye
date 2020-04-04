import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: pink;
  font-size: 18px;
`;

ReactDOM.render(<Button>Hello World</Button>, document.getElementById("root"));
