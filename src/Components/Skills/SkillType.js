import React, { Component } from "react";
import { connect } from "react-redux";
import placingStars from "../Common/Funcions/PlacingStars";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody } from "../Common/Card";

class SkillType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  render() {
    let { type, list } = this.props;
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

SkillType.propTypes = {
  type: PropTypes.string,
  index: PropTypes.number,
  list: PropTypes.array
};

function mapStateToProps(state) {
  return { cards: state.app.cards };
}

export default connect(mapStateToProps)(SkillType);
