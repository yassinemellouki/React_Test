import React, { Component } from "react";
import PropTypes from "prop-types";
import phoneIcon from "../../img/icons/phone.svg";
import emailIcon from "../../img/icons/mail.svg";

class Footer extends Component {
  render() {
    let { contact } = this.props;
    return (
      <footer className="mt-5">
        <ul>
          {contact.map((contact, index) => {
            let { name, value } = contact;
            if (name == "phone") {
              return (
                <li key={index}>
                  <img src={phoneIcon} alt={name + " icnon"} className="mr-2" />
                  <a href={"tel:" + value}>{value}</a>
                </li>
              );
            } else if (name == "email") {
              return (
                <li key={index}>
                  <img src={emailIcon} alt={name + " icon"} className="mr-2" />
                  <a href={"mailto:" + value}>{value}</a>
                </li>
              );
            } else {
              return (
                <li key={index}>
                  <span className="mr-2">{name + ":"}</span>
                  <span>{value}</span>
                </li>
              );
            }
          })}
        </ul>
      </footer>
    );
  }
}

Footer.propTypes = {
  contact: PropTypes.array
};

export default Footer;
