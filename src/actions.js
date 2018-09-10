import {
  TOGGLE_AUTHORS,
  REQUEST_DATA_PENDING,
  REQUEST_DATA_SUCCESS,
  REQUEST_DATA_FAIL,
  REQUEST_CREATE_CITE_PENDING,
  REQUEST_CREATE_CITE_SUCCESS,
  REQUEST_CREATE_CITE_FAIL
} from "./constants";

export const toggleAuthors = () => ({ type: TOGGLE_AUTHORS });

export const setData = () => dispatch => {
  dispatch({ type: REQUEST_DATA_PENDING });
  fetch("/cites", { method: "GET" })
    .then(res => res.json())
    .then(data => {
      dispatch({ type: REQUEST_DATA_SUCCESS, payload: data });
    })
    .catch(error => {
      dispatch({ type: REQUEST_DATA_FAIL, payload: error });
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
