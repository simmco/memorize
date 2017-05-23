import { FETCH_CARDS, ADD_CARD } from "../actions/types";

export default function(state = [], action) {
  const { type, text, todo } = action;

  switch (type) {
    case FETCH_CARDS:
      return action.payload;
    case ADD_CARD:
      return [...state, action.payload];
    // case REMOVE_DOMAIN:
    //   return state.filter(i => i !== todo);
    default:
      return state;
  }
}
