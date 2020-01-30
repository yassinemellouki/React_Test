import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody } from "../Card";

class Experience extends Component {
  render() {
    let { job, at, from, to, detail, index } = this.props;
    console.log("index");
    console.log(index);
    return (
      <div className="experiences left-side-section">
        <Card toggle={index == 0 ? true : false}>
          <CardHeader>
            <div className="header"> {job}</div>
          </CardHeader>
          <CardBody>
            <div className="details">
              <div className="at">{at}</div>
              <div className="time">
                <span className="form">{from}</span>
                <span className="to">{to}</span>
              </div>
              <div className="detail">
                <p>{detail}</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

Experience.propTypes = {
  job: PropTypes.string,
  at: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
  detail: PropTypes.string,
  toggle: PropTypes.bool
};

export default Experience;
