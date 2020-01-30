import React, { Component } from "react";
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
    console.log(this.props.children[1]._owner.key);
    let propedChildrens = this.props.children.map((child, index) => {
      if (child.type.name === "CardHeader") {
        return React.cloneElement(child, {
          key: index,
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
    return (
      <div className="card" data-tggole={this.props.toggle}>
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
    return (
      <div className="card-header" onClick={this.props.handleToggle}>
        {this.props.children}
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
  children: PropTypes.array
};

CardHeader.propTypes = {
  handleToggle: PropTypes.func,
  children: PropTypes.object,
  toggle: PropTypes.bool
};
CardBody.propTypes = {
  is_first_toggled: PropTypes.bool,
  toggle: PropTypes.bool,
  children: PropTypes.object
};

export { Card, CardHeader, CardBody };
