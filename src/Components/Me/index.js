import React, { Component } from "react";
import PropTypes from "prop-types";

class Me extends Component {
  render() {
    // CRATE A NEW TAG ELEMENTS FOR THE SPLITED STRING NAME
    //split name string to array
    let { name, specification, classes } = this.props,
      splited_name = name.split(" "),
      //separate the odd indexed names from the even names
      odd_name_array = new Array(),
      even_name_array = new Array(),
      new_name_array = new Array(),
      html_name;
    splited_name.forEach((name, i) => {
      if (i % 2 == 0) {
        even_name_array.push(splited_name[i]);
      } else {
        odd_name_array.push(splited_name[i]);
      }
    });
    //creating an array for the new taged name
    even_name_array.forEach((name, i) => {
      let odd_name = odd_name_array[i],
        even_name = name;
      if (odd_name !== undefined) {
        new_name_array.push(
          `<span class="even-word">${even_name}</span>`,
          "<br>",
          `<span class="odd-word">${odd_name}</span>`,
          "<br>"
        );
      } else {
        new_name_array.push(` <span class="even-word">${even_name}</span>`);
      }
    });
    // Converting the new generated name array to strign
    html_name = new_name_array.join("");
    function NewNameComponent() {
      return { __html: html_name };
    }
    return (
      <div className={"who-am-i mb-4 " + classes}>
        <div className="my-name">
          <h1 dangerouslySetInnerHTML={NewNameComponent()}></h1>
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
  classes: PropTypes.string,
  specification: PropTypes.string
};

export default Me;
