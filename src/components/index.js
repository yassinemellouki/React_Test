import React, { Component } from "react";
import Header from "./Header";
import About from "./About";
import Education from "./Education";

class Components extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-4">
            <About />
            <Education />
          </div>
          <div className="col-md-8">8</div>
        </div>
      </div>
    );
  }
}

export default Components;
