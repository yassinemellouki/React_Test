import React, { Component } from "react";
import ArrowIconDark from "../../img/icons/arrow-dark.svg";
import ArrowIconLight from "../../img/icons/arrow-light.svg";
import PropTypes from "prop-types";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_toggled: false,
      toggle: true
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    this.setState({ toggle: this.props.toggle });
  }

  handleToggle() {
    this.setState({ toggle: !this.state.toggle, first_toggled: true });
  }
  render() {
    let propedChildrens = this.props.children.map((child, index) => {
      if (child.type.name === "CardHeader") {
        return React.cloneElement(child, {
          key: index,
          cardStyle: this.props.cardStyle,
          toggle: this.state.toggle,
          handleToggle: () => this.handleToggle()
        });
      } else {
        return React.cloneElement(child, {
          key: index,
          toggle: this.state.toggle,
          is_first_toggled: this.state.first_toggled
        });
      }
    });
    let { toggle, cardStyle } = this.props;
    let card_style = cardStyle !== undefined ? cardStyle : "default";

    return (
      <div className={"card card-" + card_style} data-tggole={toggle}>
        {propedChildrens}
      </div>
    );
  }
}

class CardHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { toggle, cardStyle } = this.props;
    return (
      <div className="card-header" onClick={this.props.handleToggle}>
        {this.props.children}
        <div className="arrow-icon">
          <img
            className={`arrow-icon icon-${toggle ? "down" : "up"}`}
            src={
              cardStyle == "light" || cardStyle == "default"
                ? ArrowIconDark
                : ArrowIconLight
            }
            alt="arrow icon"
          />
        </div>
      </div>
    );
  }
}

class CardBody extends Component {
  render() {
    let visibility;
    let collapsing = "";
    if (this.props.is_first_toggled) {
      visibility = this.props.toggle ? "show" : "hide";
      collapsing = "collapsing ";
    } else {
      visibility = this.props.toggle ? "show" : "hide";
    }

    return (
      <div className={"card-body " + collapsing + visibility}>
        {this.props.children}
      </div>
    );
  }
}

Card.propTypes = {
  toggle: PropTypes.bool,
  children: PropTypes.array,
  cardStyle: PropTypes.string
};

CardHeader.propTypes = {
  handleToggle: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  toggle: PropTypes.bool,
  cardStyle: PropTypes.string
};
CardBody.propTypes = {
  is_first_toggled: PropTypes.bool,
  toggle: PropTypes.bool,
  children: PropTypes.object,
  cardStyle: PropTypes.string
};

export { Card, CardHeader, CardBody };
