import {
  TOGGLE_AUTHORS,
  REQUEST_CITES_PENDING,
  REQUEST_CITES_SUCCESS,
  REQUEST_CITES_FAIL,
  REQUEST_AUTHORS_PENDING,
  REQUEST_AUTHORS_SUCCESS,
  REQUEST_AUTHORS_FAIL,
  REQUEST_CREATE_CITE_PENDING,
  REQUEST_CREATE_CITE_SUCCESS,
  REQUEST_CREATE_CITE_FAIL
} from "./constants";

export const toggleAuthors = () => ({ type: TOGGLE_AUTHORS });

export const getCites = () => dispatch => {
  dispatch({ type: REQUEST_CITES_PENDING });
  fetch("/cites", { method: "GET" })
    .then(res => res.json())
    .then(data => {
      dispatch({ type: REQUEST_CITES_SUCCESS, payload: data });
    })
    .catch(error => {
      dispatch({ type: REQUEST_CITES_FAIL, payload: error });
    });
};

export const getAuthors = () => dispatch => {
  dispatch({ type: REQUEST_AUTHORS_PENDING });
  fetch("/authors", { method: "GET" })
    .then(res => res.json())
    .then(data => {
      dispatch({ type: REQUEST_AUTHORS_SUCCESS, payload: data });
    })
    .catch(error => {
      dispatch({ type: REQUEST_AUTHORS_FAIL, payload: error });
    });
};

export const createCite = values => dispatch => {
  dispatch({ type: REQUEST_CREATE_CITE_PENDING });
  fetch("/cites/create", { method: "POST", body: JSON.stringify(values) })
    .then(res => res.json())
    .then(data => {
      dispatch({ type: REQUEST_CREATE_CITE_SUCCESS, payload: data });
    })
    .catch(error => {
      dispatch({ type: REQUEST_CREATE_CITE_FAIL, payload: error });
    });
};
