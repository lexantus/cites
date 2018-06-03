import React, { Component } from 'react';
import AddAuthor from './AddAuthor';
import styles from './index.css';

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
          <div>
            <div className={styles.trigger_options} tabIndex="2">
              <div className={styles.option}>
                <img src="pushkin.jpg" width="44" height="44" alt="" />
                <span className={styles.option__txt}>
                  Пушкин Александр Сергеич
                </span>
              </div>
            </div>
            <AddAuthor />
          </div>
          <button className={styles.submit} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
