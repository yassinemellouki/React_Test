import React, { Component } from "react";
import PropTypes from "prop-types";

class Experience extends Component {
  render() {
    let { job, at, from, to, detail } = this.props;
    return (
      <div className="experiences left-side-section">
        <div className="header"> {job}</div>
        <div className="details">
          <div className="at">{at}</div>
          <div className="time">
            <span className="form">{from}</span>
            <span className="to">{to}</span>
          </div>
          <div className="detail">
            <p>{detail}</p>
          </div>
        </div>
      </div>
    );
  }
}

Experience.propTypes = {
  job: PropTypes.string,
  at: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
  detail: PropTypes.string,
  toggle: PropTypes.bool
};

export default Experience;
