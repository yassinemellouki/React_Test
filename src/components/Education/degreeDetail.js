import React, { Component } from "react";
import PropTypes from "prop-types";

class DegreeDetail extends Component {
  render() {
    const { degree, school } = this.props;
    return (
      <div className="degree-detail">
        <h4 className="degree">{degree}</h4>
        <span className="school">{school}</span>
      </div>
    );
  }
}

DegreeDetail.propTypes = {
  degree: PropTypes.string,
  school: PropTypes.string
};

export default DegreeDetail;
