import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./index.css";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.numPages = Math.floor(props.total / props.itemsPerPage);
    this.pages = [];
    for (let i = 0; i < this.numPages; i++) {
      this.pages.push(i + 1);
    }
  }

  getPageBtn(i, isActive = false) {
    const classes = classNames({
      [styles.active]: isActive
    });
    return (
      <li key={i}>
        <a className={classes} onClick={() => this.props.clickHandler(i)}>
          {i}
        </a>
      </li>
    );
  }

  render() {
    if (this.numPages > 0) {
      return (
        <ul className={styles.pagination}>
          <li>
            <a
              className="prev"
              onClick={() =>
                this.props.clickHandler(
                  this.props.activePage >= 2
                    ? this.props.activePage - 1
                    : this.props.activePage
                )
              }
            >
              ←
            </a>
          </li>
          {this.pages.map((page, i) =>
            this.getPageBtn(i + 1, i + 1 === this.props.activePage)
          )}
          <li>
            <a
              className="next"
              onClick={() =>
                this.props.clickHandler(
                  this.props.activePage < this.numPages
                    ? this.props.activePage + 1
                    : this.props.activePage
                )
              }
            >
              →
            </a>
          </li>
        </ul>
      );
    }
    return null;
  }
}

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default Pagination;
