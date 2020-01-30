import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Experience from "./Experience";
import { Card, CardHeader, CardBody } from "../Card";

class Experiences extends Component {
  render() {
    let { state } = this.props;
    let { experience } = state.resume;
    return (
      <div className="experiences left-side-section">
        <Card toggle={false}>
          <CardHeader>
            <div className="title">
              <h2>Work Experiences</h2>
            </div>
          </CardHeader>

          <CardBody>
            <div className="experiences-list">
              {experience.map((experience, index) => (
                <Experience
                  key={index}
                  job={experience.job}
                  at={experience.at}
                  from={experience.from}
                  to={experience.to}
                  detail={experience.details}
                  toggle={false}
                />
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

Experiences.propTypes = {
  state: PropTypes.object
};

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(Experiences);
