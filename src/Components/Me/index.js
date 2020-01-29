import React, { Component } from "react";
import PropTypes from "prop-types";

class Me extends Component {
  render() {
    let { name, specification } = this.props;
    return (
      <div className="my-info">
        <div className="my-name">
          <h1>{name}</h1>
        </div>
        <div className="specification">
          <span>{specification}</span>
        </div>
      </div>
    );
  }
}

Me.propTypes = {
  name: PropTypes.string,
  specification: PropTypes.string
};

export default Me;
