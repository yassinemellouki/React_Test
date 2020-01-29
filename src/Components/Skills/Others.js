import React, { Component } from "react";
import PropTypes from "prop-types";

class Others extends Component {
  render() {
    let { list } = this.props;
    return (
      <div className="skill col-md-6">
        <div className="title">
          <h2>Others</h2>
        </div>
        <div className="list">
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

Others.propTypes = {
  list: PropTypes.array
};

export default Others;
