import React, { Component } from "react";
import SkillTypeFram from "./SkillTypeFram";

class Experiences extends Component {
  render() {
    return (
      <div className="skills wrapper-section py-5">
        <div className="title">
          <h2>Skills</h2>
          <hr className="second-line-separation" />
        </div>

        <div className="skills-list row">
          <SkillTypeFram />
        </div>
      </div>
    );
  }
}

export default Experiences;
