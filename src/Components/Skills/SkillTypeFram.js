import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Field from "./Field";
import Others from "./Others";

class SkillTypeFram extends Component {
  render() {
    let { state } = this.props;
    let { skills } = state.resume;
    let specified_fields = skills.filter(skill => skill.filed !== "others"),
      other_field = skills.filter(skill => skill.filed === "others");
    return (
      <React.Fragment>
        {specified_fields.map((skill, index) => (
          <Field key={index} name={skill.filed} data={skill.skills} />
        ))}
        <Others name={other_field[0].name} list={other_field[0].list} />
      </React.Fragment>
    );
  }
}

SkillTypeFram.propTypes = {
  state: PropTypes.object
};

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(SkillTypeFram);
