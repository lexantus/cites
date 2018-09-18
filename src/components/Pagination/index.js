import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./index.css";

const Pagination = ({ itemsPerPage, total, activePage, clickHandler }) => {
  const numPages = Math.floor(total / itemsPerPage);
  const getPageBtn = (i, isActive = false) => {
    const classes = classNames({
      [styles.active]: isActive
    });
    return (
      <li>
        <a className={classes} onClick={() => clickHandler(i)}>
          {i}
        </a>
      </li>
    );
  };
  const pages = [];
  for (let i = 0; i < numPages; i++) {
    pages.push(i + 1);
  }
  if (numPages > 0) {
    return (
      <ul className={styles.pagination}>
        <li>
          <a href="#" className="prev">
            ←
          </a>
        </li>
        {pages.map((page, i) => getPageBtn(i + 1, i + 1 === activePage))}
        <li>
          <a href="#" className="next">
            →
          </a>
        </li>
      </ul>
    );
  }
  return null;
};

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default Pagination;
