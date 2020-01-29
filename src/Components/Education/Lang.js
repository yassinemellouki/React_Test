import React, { Component } from "react";
import PropTypes from "prop-types";

class Lang extends Component {
  render() {
    const { lang } = this.props;
    return (
      <div className="lang-detail">
        <span>{lang}</span>
      </div>
    );
  }
}

Lang.propTypes = {
  lang: PropTypes.string
};

export default Lang;
