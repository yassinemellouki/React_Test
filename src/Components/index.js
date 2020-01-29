import React, { Component } from "react";
import Header from "./Header";
import About from "./About";
import Education from "./Education";
import Me from "./Me";
import Experiences from "./Experiences";
import Skills from "./Skills";

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
          <div className="col-md-8">
            <Me
              name="Yassine Mellouki"
              specification="Front end web developer"
            />
            <Experiences />
            <Skills />
          </div>
        </div>
      </div>
    );
  }
}

export default Components;
