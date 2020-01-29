import React, { Component } from "react";
import Components from "./Components/";
import { connect } from "react-redux";
import axios from "axios";
import { fetchData } from "./redux/actions/resumeActions";
import PropTypes from "prop-types";

class App extends Component {
  componentDidMount() {
    let { dispatch } = this.props;
    axios.get("http://localhost:3000/resume").then(res => {
      dispatch(fetchData(res.data));
    });
  }

  render() {
    return (
      <React.Fragment>
        <Components />
      </React.Fragment>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func
};
function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(App);
