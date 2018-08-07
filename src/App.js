import React, { Component } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import { Provider } from "react-redux";
import AddCite from "./components/AddCite";
import { changeAuthor } from "./reducers";
import { createLogger } from "redux-logger";

const logger = createLogger();
const reducers = combineReducers({ form: formReducer, app: changeAuthor });
const store = createStore(reducers, applyMiddleware(logger));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AddCite />
      </Provider>
    );
  }
}

export default App;
