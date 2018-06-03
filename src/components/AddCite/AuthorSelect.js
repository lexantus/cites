import React, { Component } from 'react';
import classNames from 'classnames';
import AddAuthor from './AddAuthor';
import styles from './AuthorSelect.css';

export default class AuthorSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.setState({
      isClicked: !this.state.isClicked
    });
  }
  render() {
    const selectDropdownClass = classNames({
      [styles.options]: true,
      [styles.options_hide]: !this.state.isClicked
    });
    return (
      <div>
        <div
          className={styles.trigger_options}
          tabIndex="2"
          onClick={this.clickHandler}
        >
          <div className={styles.option}>
            <img src="pushkin.jpg" width="44" height="44" alt="" />
            <span className={styles.option__txt}>Пушкин Александр Сергеич</span>
          </div>
        </div>
        <div className={selectDropdownClass}>
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
        <AddAuthor />
      </div>
    );
  }
}
