import React, { Component } from "react";
import SVG from "react-inlinesvg";
import SkillIcon from "../../img/icons/skills.svg";
import PropTypes from "prop-types";
import SkillType from "./SkillType";

class Skill extends Component {
  render() {
    let { name, data } = this.props;
    return (
      <div className="skill col-md-6 my-4">
        <div className="field-title mb-4">
          <h2>
            <SVG src={SkillIcon} className="header-icon float-left mr-2" />
            {name}
          </h2>
        </div>
        <div className="fileds mt-2">
          {data.map((skill_field, index) => {
            return (
              <SkillType
                key={index}
                index={index}
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
