import {
  TOGGLE_AUTHORS,
  REQUEST_DATA_PENDING,
  REQUEST_DATA_SUCCESS,
  REQUEST_DATA_FAIL
} from "./constants";

export const toggleAuthors = () => ({ type: TOGGLE_AUTHORS });

export const setData = () => dispatch => {
  dispatch({ type: REQUEST_DATA_PENDING });
  fetch("//localhost:80/cites", { method: "GET" })
    .then(res => res.json())
    .then(data => {
      dispatch({ type: REQUEST_DATA_SUCCESS, payload: data });
    })
    .catch(error => {
      dispatch({ type: REQUEST_DATA_FAIL, payload: error });
    });
};
