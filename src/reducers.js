import {
  TOGGLE_AUTHORS,
  REQUEST_CITES_PENDING,
  REQUEST_CITES_SUCCESS,
  REQUEST_CITES_FAIL,
  REQUEST_AUTHORS_PENDING,
  REQUEST_AUTHORS_SUCCESS,
  REQUEST_AUTHORS_FAIL,
  REQUEST_CREATE_CITE_SUCCESS
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
  isPendingCites: false,
  isPendingAuthors: false,
  cites: [],
  authors: [],
  errorCites: "",
  errorAuthors: ""
};

export const requestData = (state = initialDataState, action = {}) => {
  switch (action.type) {
    case REQUEST_CITES_PENDING:
      return { ...state, isPendingCites: true };
    case REQUEST_CITES_SUCCESS:
      return { ...state, cites: action.payload, isPendingCites: false };
    case REQUEST_CITES_FAIL:
      return { ...state, errorCites: action.payload, isPendingCites: false };
    case REQUEST_AUTHORS_PENDING:
      return { ...state, isPendingAuthors: true };
    case REQUEST_AUTHORS_SUCCESS:
      return { ...state, authors: action.payload, isPendingAuthors: false };
    case REQUEST_AUTHORS_FAIL:
      return {
        ...state,
        errorAuthors: action.payload,
        isPendingAuthors: false
      };
    case REQUEST_CREATE_CITE_SUCCESS:
      return { ...state, cites: action.payload, isPendingCites: false };
    default:
      return state;
  }
};
