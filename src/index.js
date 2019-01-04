import React from "react";
import ReactDOM from "react-dom";
import thunkMiddleware from "redux-thunk";
import "./index.css";
import MainPage from "./pages/Main";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import Page404 from "./pages/404";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
