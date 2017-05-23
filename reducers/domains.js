import { FETCH_DOMAIN, ADD_DOMAIN } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_DOMAIN:
      return action.payload;
    case ADD_DOMAIN:
      return [...state, action.payload];
    // case REMOVE_DOMAIN:
    //   return state.filter(i => i !== todo);
    default:
      return state;
  }
}
