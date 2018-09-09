import React, { Component } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import { Provider } from "react-redux";
import MainPage from "./pages/Main";
import { changeAuthor, requestData } from "./reducers";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

const logger = createLogger();

const reducers = combineReducers({
  form: formReducer,
  app: changeAuthor,
  requestData
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
  }
}

export default App;
