import { CHANGE_AUTHOR, TOGGLE_AUTHORS } from "./constants";

export const setAuthor = author => ({ type: CHANGE_AUTHOR, payload: author });
export const toggleAuthors = () => ({ type: TOGGLE_AUTHORS });
