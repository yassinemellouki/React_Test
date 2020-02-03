import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody } from "../Common/Card";

class Interests extends Component {
  render() {
    let { interests } = this.props;
    return (
      <div className="interests left-side-section">
        <Card>
          <CardHeader>
            <div className="title">
              <h2>Interested In</h2>
            </div>
          </CardHeader>
          <CardBody>
            <div className="interests-list mt-3">
              <ul>
                {interests.map((interest, index) => (
                  <li key={index}> {interest}</li>
                ))}
              </ul>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

Interests.propTypes = {
  interests: PropTypes.array
};

export default Interests;
