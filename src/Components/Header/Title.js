import React, { Component } from "react";
import { connect } from "react-redux";

class Title extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h1>My React CV</h1>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(Title);
