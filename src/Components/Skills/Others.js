import React, { Component } from "react";
import SkillIcon from "../../img/icons/skills.svg";
import SVG from "react-inlinesvg";
import placingStars from "../Common/Funcions/PlacingStars";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody } from "../Common/Card";

class Others extends Component {
  render() {
    let { list } = this.props;
    return (
      <div className="skill others col-md-6">
        <Card cardStyle="light">
          <CardHeader>
            <div className="field-title">
              <SVG src={SkillIcon} className="header-icon float-left mr-2" />
              <h3>Others</h3>
            </div>
          </CardHeader>
          <CardBody>
            <div className="list mt-3">
              <ul>
                {list.map((item, index) => (
                  <li key={index}>
                    <span className="d-inline-block w-50">{item.name}</span>

                    <div className="w-50 d-inline-block">
                      <span className="level">
                        {//RETURN A CLASSED SVG STARS ICONS BASED ON THE ITEM LEVEL VALUE
                        placingStars(item.level)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

Others.propTypes = {
  list: PropTypes.array
};

export default Others;
