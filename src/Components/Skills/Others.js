import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody } from "../Card";

class Others extends Component {
  render() {
    let { list } = this.props;
    return (
      <div className="skill col-md-6">
        <Card>
          <CardHeader>
            <div className="title">
              <h3>Others</h3>
            </div>
          </CardHeader>
          <CardBody>
            <div className="list">
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

Others.propTypes = {
  list: PropTypes.array
};

export default Others;
