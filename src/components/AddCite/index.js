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
        <div className={styles.trigger_options} tabIndex="2">
          <div className={styles.option}>
            <img src="pushkin.jpg" width="44" height="44" alt="" />
            <span className={styles.option__txt}>Новая карта</span>
          </div>
        </div>
        <div className={styles.options}>
          <div className={styles.option}>
            <img src="pushkin.jpg" width="44" height="44" alt="" />
            <span className={styles.option__txt}>Пушкин Александр Сергеич</span>
          </div>
          <div className={styles.option}>
            <img src="pushkin.jpg" width="44" height="44" alt="" />
            <span className={styles.option__txt}>Пушкин Александр Сергеич</span>
          </div>
          <div className={styles.option}>
            <img src="pushkin.jpg" width="44" height="44" alt="" />
            <span className={styles.option__txt}>Пушкин Александр Сергеич</span>
          </div>
          <div className={styles.option}>
            <img src="pushkin.jpg" width="44" height="44" alt="" />
            <span className={styles.option__txt}>Пушкин Александр Сергеич</span>
          </div>
          <div className={styles.option}>
            <img src="pushkin.jpg" width="44" height="44" alt="" />
            <span className={styles.option__txt}>Пушкин Александр Сергеич</span>
          </div>
          <div className={styles.option}>
            <img src="pushkin.jpg" width="44" height="44" alt="" />
            <span className={styles.option__txt}>Пушкин Александр Сергеич</span>
          </div>
        </div>
      </div>
    );
  }
}
