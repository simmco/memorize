import { FETCH_DOMAIN } from "../actions/types";

export default function(state = [], action) {
  const { type, text, todo } = action;

  switch (type) {
    case FETCH_DOMAIN:
      return action.payload;
    // case REMOVE_DOMAIN:
    //   return state.filter(i => i !== todo);
    default:
      return state;
  }
}
