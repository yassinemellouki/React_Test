import React, { Component } from "react";
import Header from "./Header";
import About from "./About";
import Education from "./Education";
import Me from "./Me";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Interests from "./Interests";
import Footer from "./Footer";

class Components extends Component {
  render() {
    return (
      <React.Fragment>
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
              <Interests
                interests={[
                  "Coding",
                  "Learning",
                  "Listening To Musinc",
                  "Watching Youtube"
                ]}
              />
            </div>
          </div>
        </div>
        <Footer
          contact={[
            { value: "+212671815573", name: "phone" },
            { value: "yassinemellouki4@gmail.com", name: "email" }
          ]}
        />
      </React.Fragment>
    );
  }
}

export default Components;
