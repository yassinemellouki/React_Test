import React, { Component } from "react";
import Field from "./Field";
import Others from "./Others";

class SkillTypeFram extends Component {
  render() {
    return (
      <React.Fragment>
        <Field
          name="Web Development"
          data={[
            { type: "languages", list: ["HTML5", "CSS3", "JAVASCRIPT/ES6"] }
          ]}
        />
        <Others />
      </React.Fragment>
    );
  }
}

export default SkillTypeFram;
