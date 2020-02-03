import React, { Component } from "react";
import Loading from "./Components/Loading/";
import Components from "./Components/";
import { connect } from "react-redux";
import axios from "axios";
import { fetchData } from "./redux/actions/resumeActions";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: null
    };
  }

  componentDidMount() {
    let { dispatch } = this.props;
    axios
      .get("http://localhost:3000/resume")
      .then(res => {
        dispatch(fetchData(res.data));
        this.setState({ fetched: true });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.fetched ? <Components /> : <Loading />}
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
