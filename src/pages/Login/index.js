import React, { Component } from "react";
import styles from "./index.css";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <div className={styles.wrapper}>
          <form className={styles.window} action="/api/login" method="post">
            <label className={styles.label} htmlFor="login">
              Login
            </label>
            <input
              className={styles.input}
              type="text"
              name="login"
              id="login"
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

export default LoginPage;
