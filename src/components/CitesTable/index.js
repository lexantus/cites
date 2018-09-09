import React from "react";
import PropTypes from "prop-types";
import styles from "./index.css";

const getTableRow = ({ cite, author }) => (
  <tr key={cite}>
    <td className={styles.td1}>{cite}</td>
    <td className={styles.td2}>{author}</td>
  </tr>
);

const CitesTable = ({ data }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th>Cite</th>
        <th>Author</th>
      </tr>
    </thead>
    <tbody>{data.map(getTableRow)}</tbody>
  </table>
);

CitesTable.defaultProps = {
  data: []
};

CitesTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      cite: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  )
};

export default CitesTable;
