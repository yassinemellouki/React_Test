export function addCard(value) {
  return { type: "ADD_CARD", payload: value };
}

export function cardToggle(value) {
  return { type: "CARD_TOGGLE", payload: value };
}
