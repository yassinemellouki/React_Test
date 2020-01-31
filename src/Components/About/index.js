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
      <div className="about-section wrapper-section main-bg mb-5">
        <div className="title pt-4">
          <h3>About Me</h3>
        </div>
        <div className="details mx-auto py-4">
          <p>{resume.about}</p>
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
