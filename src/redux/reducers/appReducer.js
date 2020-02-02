let initialState = {
  cards: []
};

export default function appReducer(state = initialState, action) {
  let cards = state.cards;
  function cardToggle({ id, toggle }) {
    let targetted_id = id;
    return cards.map(card => {
      if (card.id == targetted_id) {
        card.toggle = toggle ? true : false;
        return card;
      } else {
        return card;
      }
    });
  }
  switch (action.type) {
    case "ADD_CARD":
      return Object.assign({}, state, { cards: [...cards, action.payload] });
    case "CARD_TOGGLE":
      return Object.assign({}, state, {
        cards: cardToggle(action.payload)
      });
    default:
      return state;
  }
}
