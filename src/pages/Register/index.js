import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./index.css";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      repeatPassword: ""
    };
    this.refLogin = React.createRef();
    this.refPassword = React.createRef();
    this.refRepeatPassword = React.createRef();
  }
  handleSubmit(e) {
    e.preventDefault();
    const { login, password, repeatPassword } = this.state;
    let isValid = true;
    if (!login) {
      this.refLogin.current.classList.add(styles.error);
      isValid = false;
    } else {
      this.refLogin.current.classList.remove(styles.error);
    }
    if (!password) {
      this.refPassword.current.classList.add(styles.error);
      isValid = false;
    } else if (password !== repeatPassword) {
      isValid = false;
      this.refPassword.current.classList.remove(styles.error);
      this.refRepeatPassword.current.classList.add(styles.error);
    } else {
      this.refRepeatPassword.current.classList.remove(styles.error);
    }

    if (isValid) {
      fetch("/register", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ login, password })
      })
        .then(res => console.log("res", res))
        .then(data => console.log("data", data))
        .catch(err => console.log("err", err));
    }
  }
  handleLogin(e) {
    this.setState({ login: e.target.value });
  }
  handlePassword(e) {
    this.setState({ password: e.target.value });
  }
  handleRepeatPassword(e) {
    this.setState({ repeatPassword: e.target.value });
  }
  render() {
    return (
      <div>
        <div className={styles.wrapper}>
          <form
            className={styles.window}
            action="/register"
            method="post"
            onSubmit={e => this.handleSubmit(e)}
          >
            <h2 className={styles.header}>Registration</h2>
            <div className={styles.linkDiv}>
              or <Link to="/login">Login</Link>
            </div>
            <label className={styles.label} htmlFor="login">
              Login
            </label>
            <input
              className={styles.input}
              type="text"
              name="login"
              id="login"
              ref={this.refLogin}
              value={this.state.login}
              onChange={e => this.handleLogin(e)}
              autoComplete="off"
            />
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              className={styles.input}
              type="password"
              name="password"
              id="password"
              ref={this.refPassword}
              value={this.state.password}
              onChange={e => this.handlePassword(e)}
              autoComplete="off"
            />
            <label className={styles.label} htmlFor="repeatPassword">
              Repeat password
            </label>
            <input
              className={styles.input}
              type="password"
              name="repeatPassword"
              id="repeatPassword"
              ref={this.refRepeatPassword}
              value={this.state.repeatPassword}
              onChange={e => this.handleRepeatPassword(e)}
              autoComplete="off"
            />
            <button className={styles.submit} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
