import React, { Component } from "react";
import ArrowIconDark from "../../img/icons/arrow-dark.svg";
import ArrowIconLight from "../../img/icons/arrow-light.svg";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCard, cardToggle } from "../../redux/actions/appActions.js";
import uuid from "uuid";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_toggled: false,
      toggle: true,
      id: uuid()
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    let { dispatch } = this.props;
    let { id, toggle } = this.state;
    dispatch(addCard({ id: id, toggle: toggle }));
    dispatch(cardToggle({ id: id, toggle: this.props.toggle }));
  }

  componentDidUpdate() {
    let { cards } = this.props;
    let { id, toggle } = this.state;
    let this_card = cards.filter(card => card.id == id);
    this_card = this_card[0];
    if (toggle != this_card.toggle) {
      this.setState({ toggle: this_card.toggle });
    }
  }

  handleToggle(id) {
    let { cards, dispatch } = this.props;
    let this_card = cards.filter(card => card.id == id);
    this_card = this_card[0];
    this_card.toggle = !this_card.toggle;
    dispatch(cardToggle(this_card));
    this.setState({ first_toggled: true });
  }
  render() {
    let propedChildrens = this.props.children.map((child, index) => {
      if (child.type.name === "CardHeader") {
        return React.cloneElement(child, {
          key: index,
          cardStyle: this.props.cardStyle,
          toggle: this.state.toggle,
          handleToggle: () => this.handleToggle(this.state.id)
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
  dispatch: PropTypes.func,
  filter: PropTypes.func,
  cards: PropTypes.array,
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

function mapStateToProps(state) {
  return { cards: state.app.cards };
}

let Card_Class = connect(mapStateToProps)(Card);

export { Card_Class as Card, CardHeader, CardBody };
