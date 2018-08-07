import { TOGGLE_AUTHORS } from "./constants";

const initialAuthorDataState = {
  isShowAuthorsList: false
};

export const changeAuthor = (state = initialAuthorDataState, action = {}) => {
  switch (action.type) {
    case TOGGLE_AUTHORS:
      return { ...state, isShowAuthorsList: !state.isShowAuthorsList };
    default:
      return state;
  }
};
