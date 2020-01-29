import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { state } = this.props;
    let { resume } = state;
    return (
      <div className="about-wrapper left-side-section">
        <div className="about-section">
          <div className="title">
            <h3>About Me</h3>
          </div>
          <div className="details">
            <p>{resume.about}</p>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  state: PropTypes.object
};

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(About);
