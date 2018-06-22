import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import AddCite from "./components/AddCite";
import { changeAuthor } from "./reducers";
import { createLogger } from "redux-logger";

const logger = createLogger();
const store = createStore(changeAuthor, applyMiddleware(logger));

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
