let initialState = {};

export default function resumeReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
