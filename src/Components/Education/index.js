import React, { Component } from "react";
import { connect } from "react-redux";
import DegreeDetail from "./DegreeDetail";
import Lang from "./Lang";
import PropTypes from "prop-types";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { state } = this.props;
    let { education, languages } = state.resume;
    return (
      <div className="education-wrapper section-wrapper second-bg pt-2 pb-5">
        <div className="education-section wrapper-section mb-3">
          <div className="title py-3">
            <h3>Education</h3>
          </div>
          <div className="details">
            {education.map((education, index) => (
              <DegreeDetail
                key={index}
                degree={education.degree}
                school={education.school}
              />
            ))}
          </div>
        </div>
        <div className="langs-section wrapper-section mb-2">
          <div className="title py-3">
            <h3>Language</h3>
          </div>
          <div className="details">
            {languages.map((lang, index) => (
              <Lang key={index} lang={lang} />
            ))}
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
