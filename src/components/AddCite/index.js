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
          <div>
            <div className={styles.trigger_options} tabIndex="2">
              <div className={styles.option}>
                <img src="pushkin.jpg" width="44" height="44" alt="" />
                <span className={styles.option__txt}>
                  Пушкин Александр Сергеич
                </span>
              </div>
            </div>
            <div className={(styles.options, styles.options_hide)}>
              <div className={styles.option}>
                <img src="pushkin.jpg" width="44" height="44" alt="" />
                <span className={styles.option__txt}>
                  Пушкин Александр Сергеич
                </span>
              </div>
              <div className={styles.option}>
                <img src="pushkin.jpg" width="44" height="44" alt="" />
                <span className={styles.option__txt}>
                  Пушкин Александр Сергеич
                </span>
              </div>
              <div className={styles.option}>
                <img src="pushkin.jpg" width="44" height="44" alt="" />
                <span className={styles.option__txt}>
                  Пушкин Александр Сергеич
                </span>
              </div>
              <div className={styles.option}>
                <img src="pushkin.jpg" width="44" height="44" alt="" />
                <span className={styles.option__txt}>
                  Пушкин Александр Сергеич
                </span>
              </div>
              <div className={styles.option}>
                <img src="pushkin.jpg" width="44" height="44" alt="" />
                <span className={styles.option__txt}>
                  Пушкин Александр Сергеич
                </span>
              </div>
              <div className={styles.option}>
                <img src="pushkin.jpg" width="44" height="44" alt="" />
                <span className={styles.option__txt}>
                  Пушкин Александр Сергеич
                </span>
              </div>
            </div>
            <button className={styles.btn}>Add</button>
          </div>
          <button className={styles.submit} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
