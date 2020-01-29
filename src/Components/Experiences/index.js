import React, { Component } from "react";
import Experience from "./Experience";

class Experiences extends Component {
  render() {
    return (
      <div className="experiences left-side-section">
        <div className="title">
          <h2>Work Experiences</h2>
        </div>

        <div className="experiences-list">
          <Experience
            job="Freelancer"
            at="MOJO Marketplace"
            from="2017"
            to="2018"
            detail="3 projects are accepted. One is a coming soon web page, the others are a personal Portfolio templates with different styles"
            toggle={false}
          />
          <Experience
            job="Front end web developer"
            at="Gizmo Factory"
            from="2018"
            to="2019"
            detail="3 websites ( front-end  ) using html5, css3 , SVG, and javascript. These projects are compatible with all browsers included ie11. Also, I had a chance to build a chrome Extension. Moreover working with 'laravel' project (adding pages and fixing Issues)."
            toggle={false}
          />

          <Experience
            job="Freelancer"
            at="Envato Themeforest"
            from="2019"
            to="present"
            detail=""
            toggle={false}
          />
        </div>
      </div>
    );
  }
}

export default Experiences;
