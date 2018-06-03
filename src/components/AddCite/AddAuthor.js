import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './AddAuthor.css';

export default class AddCite extends Component {
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
    const wrapperClass = classNames({
      [styles.wrapper]: true,
      [styles.wrapper_show]: this.state.isClicked
    });
    return (
      <div className={wrapperClass}>
        <a className={styles.img} href="#">
          <img src="placeholder.svg" />
        </a>
        <input className={styles.input} type="text" placeholder="Author name" />
        <button
          type="button"
          className={styles.btn}
          onClick={this.clickHandler}
        >
          Add >
        </button>
      </div>
    );
  }
}
