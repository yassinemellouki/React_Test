import React, { Component } from "react";
import Title from "./title";

class Index extends Component {
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

export default Index;
