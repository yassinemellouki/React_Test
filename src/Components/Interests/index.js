import React, { Component } from "react";
import PropTypes from "prop-types";

class Interests extends Component {
  render() {
    let { interests } = this.props;
    return (
      <div className="interests left-side-section">
        <div className="title">
          <h2>Interested In</h2>
        </div>
        <div className="interests-list">
          <ul>
            {interests.map((interest, index) => (
              <li key={index}> {interest}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

Interests.propTypes = {
  interests: PropTypes.array
};

export default Interests;
