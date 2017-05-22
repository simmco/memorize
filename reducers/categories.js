import { FETCH_CATEGORY } from "../actions/types";

export default function(state = [], action) {
  const { type, text, todo } = action;

  switch (type) {
    case FETCH_CATEGORY:
      return action.payload;
    // case REMOVE_DOMAIN:
    //   return state.filter(i => i !== todo);
    default:
      return state;
  }
}
