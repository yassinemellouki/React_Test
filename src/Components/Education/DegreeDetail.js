import React, { Component } from "react";
import PropTypes from "prop-types";

class DegreeDetail extends Component {
  render() {
    const { degree, school } = this.props;
    return (
      <div className="degree-detail mb-4">
        <h5 className="degree title main-col">{degree}</h5>
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
