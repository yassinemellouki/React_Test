import React, { Component } from "react";
import DegreeDetail from "./degreeDetail";
import Lang from "./lang";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="education-wrapper left-side-section last-section">
        <div className="education-section">
          <div className="title">
            <h3>Education</h3>
          </div>
          <div className="details">
            <DegreeDetail
              degree="Baccaureate"
              school="HIGH SCHOOL SIDI LHAJ LHBIB "
            />
            <DegreeDetail degree="Web Development" school="Self Study" />
          </div>
        </div>
        <div className="langs-section">
          <div className="title">
            <h3>Language</h3>
          </div>
          <div className="details">
            <Lang lang="English" />
            <Lang lang="French" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
