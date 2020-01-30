import React, { Component } from "react";
import PropTypes from "prop-types";
import SkillType from "./SkillType";

class Skill extends Component {
  render() {
    let { name, data } = this.props;
    return (
      <div className="skill col-md-6">
        <div className="title">
          <h2>{name}</h2>
        </div>
        <div className="fileds">
          {data.map((skill_field, index) => {
            return (
              <SkillType
                key={index}
                type={skill_field.type}
                list={skill_field.list}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

Skill.propTypes = {
  name: PropTypes.string,
  data: PropTypes.array
};

export default Skill;
