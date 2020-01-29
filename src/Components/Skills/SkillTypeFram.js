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
            { type: "languages", list: ["HTML5", "CSS3", "JAVASCRIPT/ES6"] },
            {
              type: "FRAMWORKS & LIBRARIES",
              list: ["Bootstrap", "React/Redux"]
            },
            { type: "TOOLS", list: ["Webpack (bundler)", "GIT"] }
          ]}
        />
        <Field
          name="Desing"
          data={[
            {
              type: "Tools",
              list: ["Abobe Photosop", "Adobe illustrator", "Figma", "Invision"]
            }
          ]}
        />
        <Others list={["vim", "Docker", "Linux"]} />
      </React.Fragment>
    );
  }
}

export default SkillTypeFram;
