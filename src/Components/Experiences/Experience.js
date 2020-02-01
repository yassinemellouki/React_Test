import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody } from "../Card";

class Experience extends Component {
  render() {
    let { job, at, from, to, detail, index } = this.props;
    return (
      <div className="work-experiences wrapper-section">
        <Card cardStyle="dark" toggle={index == 0 ? true : false}>
          <CardHeader>
            <div className="header pt-2 float-left"> {job} </div>
            <div className="time my-2 float-right mr-5">
              <span className="form">{from}</span>
              <span className="mx-1">-</span>
              <span className="to">{to}</span>
            </div>
          </CardHeader>
          <CardBody>
            <div className="details p-3">
              <div className="at my-1">{at}</div>

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
  toggle: PropTypes.bool,
  index: PropTypes.number
};

export default Experience;
