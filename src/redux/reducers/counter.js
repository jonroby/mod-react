import { INCREMENT, DECREMENT, RESET } from "../actions/constants";

export const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
  case INCREMENT:
    return { ...state, count: state.count + 1 };
  case DECREMENT:
    return { ...state, count: state.count - 1 };
  case RESET:
    return state;
  default:
    return state;
  }
};

export default counter;
