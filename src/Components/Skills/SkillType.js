import React, { Component } from "react";
import StarIcon from "../../img/icons/star.svg";
import SVG from "react-inlinesvg";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody } from "../Card";

class SkillType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_first_toggle: true
    };
  }
  render() {
    let { type, list } = this.props;
    const n = 5;
    let is_float = false;
    let floated = false;
    return (
      <div className="filed">
        <Card cardStyle="dark">
          <CardHeader>
            <h3 className="title mt-2">{type}</h3>
          </CardHeader>
          <CardBody>
            <div className="list mt-3">
              <ul>
                {list.map((item, index) => (
                  <li key={index}>
                    <span className="d-inline-block">{item.name}</span>
                    <span className="level">
                      {[...Array(n)].map((e, i) => {
                        let level = parseInt(item.level);
                        let num_to_array = item.level.split(".");
                        if (typeof num_to_array[1] == "string") {
                          is_float = true;
                        } else {
                          is_float = false;
                        }
                        if (level > i + 1) {
                          return (
                            <span className="star star-filled" key={i}>
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

SkillType.propTypes = {
  type: PropTypes.string,
  index: PropTypes.number,
  list: PropTypes.array
};

export default SkillType;
