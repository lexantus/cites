import { CHANGE_AUTHOR, TOGGLE_AUTHORS } from "./constants";

const initialAuthorDataState = {
  author: {
    id: 2,
    name: "Толстой",
    photo: "tolstoy.jpg"
  },
  isShowAuthorsList: false
};

export const changeAuthor = (state = initialAuthorDataState, action = {}) => {
  switch (action.type) {
    case CHANGE_AUTHOR:
      return { ...state, author: action.payload };
    case TOGGLE_AUTHORS:
      return { ...state, isShowAuthorsList: !state.isShowAuthorsList };
    default:
      return state;
  }
};
