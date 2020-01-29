import React, { Component } from "react";
import PropTypes from "prop-types";

class Footer extends Component {
  render() {
    let { contact } = this.props;
    return (
      <footer>
        <ul>
          {contact.map((contact, index) => (
            <li key={index}> {contact.value} </li>
          ))}
        </ul>
      </footer>
    );
  }
}

Footer.propTypes = {
  contact: PropTypes.array
};

export default Footer;
