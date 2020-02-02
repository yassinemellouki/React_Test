import React, { Component } from "react";
import SkillIcon from "../../img/icons/skills.svg";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody } from "../Card";

class Others extends Component {
  render() {
    let { list } = this.props;
    return (
      <div className="skill others col-md-6">
        <Card cardStyle="light">
          <CardHeader>
            <div className="field-title">
              <img
                src={SkillIcon}
                className="float-left mr-2"
                alt="Skills Icon"
              />
              <h3>Others</h3>
            </div>
          </CardHeader>
          <CardBody>
            <div className="list mt-3">
              <ul>
                {list.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

Others.propTypes = {
  list: PropTypes.array
};

export default Others;
