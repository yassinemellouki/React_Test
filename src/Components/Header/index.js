import React, { Component } from "react";
import Title from "./Title";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <Title />
      </header>
    );
  }
}

export default Header;
