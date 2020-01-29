import React, { Component } from "react";
import PropTypes from "prop-types";

class SkillType extends Component {
  render() {
    let { type, list } = this.props;
    return (
      <div className="filed">
        <div className="title">{type}</div>
        <div className="list">
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

SkillType.propTypes = {
  type: PropTypes.string,
  list: PropTypes.array
};

export default SkillType;
