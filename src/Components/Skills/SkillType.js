import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody } from "../Card";

class SkillType extends Component {
  render() {
    let { type, list } = this.props;
    return (
      <div className="filed">
        <Card cardStyle="dark">
          <CardHeader>
            <h3 className="title mt-2">{type}</h3>
          </CardHeader>
          <CardBody>
            <div className="list mt-3">
              <ul>
                {list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

SkillType.propTypes = {
  type: PropTypes.string,
  list: PropTypes.array
};

export default SkillType;
