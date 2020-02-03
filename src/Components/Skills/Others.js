import React, { Component } from "react";
import SkillIcon from "../../img/icons/skills.svg";
import StarIcon from "../../img/icons/star.svg";
import SVG from "react-inlinesvg";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody } from "../Card";

class Others extends Component {
  render() {
    let { list } = this.props;
    const n = 5;
    let is_float = false;
    let floated = false;
    return (
      <div className="skill others col-md-6">
        <Card cardStyle="light">
          <CardHeader>
            <div className="field-title">
              <img
                src={SkillIcon}
                className="float-left mr-2"
                alt="Skills Icon"
              />
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
                        {[...Array(n)].map((e, i) => {
                          let level = parseInt(item.level);
                          let num_to_array = item.level.split(".");
                          if (typeof num_to_array[1] == "string") {
                            is_float = true;
                          } else {
                            is_float = false;
                          }
                          if (level > i) {
                            return (
                              <span className={"star star-filled"} key={i}>
                                <SVG src={StarIcon} />
                              </span>
                            );
                          } else if (is_float && !floated) {
                            if (!floated) {
                              floated = true;
                              return (
                                <span className="star star-half" key={i}>
                                  <SVG src={StarIcon} />
                                </span>
                              );
                            }
                          } else {
                            return (
                              <span className="star star-not-filled" key={i}>
                                <SVG src={StarIcon} />
                              </span>
                            );
                          }
                        })}
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
