import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Field from "./Field";
import Others from "./Others";

class SkillTypeFram extends Component {
  render() {
    let { state } = this.props;
    let { skills } = state.resume;
    // SEPARATE FIELDS CARDS FROM OTHERS CARD/
    let fields = skills.filter(skill => skill.filed !== "others"),
      others = skills.filter(skill => skill.filed === "others");
    return (
      <React.Fragment>
        {fields.map((skill, index) => (
          <Field key={index} name={skill.filed} data={skill.skills} />
        ))}
        <Others name={others[0].name} list={others[0].list} />
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
