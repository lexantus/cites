import React, { Component } from "react";
import styles from "./index.css";

export default class AddCite extends Component {
  render() {
    return (
      <div className={styles.window}>
        <div className={styles.h1}>Add cite</div>
        <form method="POST" action="/cites/add">
          <label className={styles.label} for="cite">
            Cite
          </label>
          <span className={styles.textarea} id="cite" contenteditable="true" />
          <div className={styles.textareaRectWrapper}>
            <div className={styles.textareaRect} />
          </div>
          <label className={styles.label} for="author">
            Author
          </label>
        </form>
      </div>
    );
  }
}
