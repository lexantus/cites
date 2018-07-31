import React, { Component } from "react";
import classNames from "classnames";
import styles from "./AddAuthor.css";

export default class AddAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  changeImg(files) {
    const fr = new FileReader();
    fr.onload = () => {
      this.img.setAttribute("src", fr.result);
      this.textInput.focus();
    };
    fr.readAsDataURL(files[0]);
  }
  clickHandler() {
    this.setState({
      isClicked: !this.state.isClicked
    });
    if (this.state.isClicked) {
      console.log("UPLOADING IMG...");
    }
    this.textInput.focus();
  }
  render() {
    const wrapperClass = classNames({
      [styles.wrapper]: true,
      [styles.wrapper_show]: this.state.isClicked
    });
    return (
      <div className={wrapperClass}>
        <label className={styles.input_file_label} htmlFor="inputAvatar">
          <img ref={img => (this.img = img)} src="placeholder.svg" alt="" />
        </label>
        <input
          id="inputAvatar"
          type="file"
          accept="image/jpeg, image/png"
          className={styles.input_file}
          onChange={event => this.changeImg(event.target.files)}
        />
        <input
          ref={input => (this.textInput = input)}
          className={styles.input}
          type="text"
          placeholder="Author name"
          autoFocus={this.state.isClicked}
        />
        <button
          type="button"
          className={styles.btn}
          onClick={this.clickHandler}
        >
          {this.state.isClicked ? "Add" : "Add >"}
        </button>
      </div>
    );
  }
}
