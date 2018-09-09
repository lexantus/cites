import {
  TOGGLE_AUTHORS,
  REQUEST_DATA_PENDING,
  REQUEST_DATA_SUCCESS,
  REQUEST_DATA_FAIL
} from "./constants";

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

const initialDataState = {
  isPending: false,
  data: [],
  error: ""
};

export const requestData = (state = initialDataState, action = {}) => {
  switch (action.type) {
    case REQUEST_DATA_PENDING:
      return { ...state, isPending: true };
    case REQUEST_DATA_SUCCESS:
      return { ...state, data: action.payload, isPending: false };
    case REQUEST_DATA_FAIL:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
