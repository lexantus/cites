import React, { Component } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import { Provider } from "react-redux";
import MainPage from "./pages/Main";
import RegisterPage from "./pages/Register";
import { changeAuthor, requestData } from "./reducers";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  form: formReducer,
  app: changeAuthor,
  requestData
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RegisterPage />
      </Provider>
    );
  }
}

export default App;
