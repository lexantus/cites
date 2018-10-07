import React from "react";
import ReactDOM from "react-dom";
import thunkMiddleware from "redux-thunk";
import "./index.css";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { changeAuthor, requestData } from "./reducers";
import { reducer as formReducer } from "redux-form";
import { applyMiddleware, combineReducers, createStore } from "redux";

const reducers = combineReducers({
  form: formReducer,
  app: changeAuthor,
  requestData
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <h1>Header</h1>
        <Route exact path="/" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
