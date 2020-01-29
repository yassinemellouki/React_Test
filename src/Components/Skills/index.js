import React, { Component } from "react";
import SkillTypeFram from "./SkillTypeFram";

class Experiences extends Component {
  render() {
    return (
      <div className="experiences left-side-section">
        <div className="title">
          <h2>Skills</h2>
        </div>

        <div className="skills-list row">
          <SkillTypeFram />
        </div>
      </div>
    );
  }
}

export default Experiences;
