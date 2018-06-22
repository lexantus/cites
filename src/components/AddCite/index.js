import React, { Component } from "react";
import AuthorSelect from "./AuthorSelect";
import styles from "./index.css";

export default class AddCite extends Component {
  render() {
    return (
      <div className={styles.window}>
        <div className={styles.h1}>Add cite</div>
        <form method="POST" action="/cites/add">
          <label className={styles.label} htmlFor="cite">
            Cite
          </label>
          <span className={styles.textarea} id="cite" contentEditable="true" />
          <div className={styles.textareaRectWrapper}>
            <div className={styles.textareaRect} />
          </div>
          <label className={styles.label} htmlFor="author">
            Author
          </label>
          <AuthorSelect />
          <button className={styles.submit} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
