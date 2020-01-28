import React, { Component } from "react";
import { connect } from "react-redux";

class Title extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <h2>Hello form header</h2>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(Title);
