import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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
    let { state } = this.props;
    let { name, speciality, interests, contact } = state.resume;
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
              <Me name={name} specification={speciality} />
              <Experiences />
              <Skills />
              <Interests interests={[...interests]} />
            </div>
          </div>
        </div>
        <Footer contact={[...contact]} />
      </React.Fragment>
    );
  }
}

Components.propTypes = {
  state: PropTypes.object,
  name: PropTypes.string,
  specification: PropTypes.string,
  interests: PropTypes.array,
  contact: PropTypes.array
};

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(Components);