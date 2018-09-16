import React from "react";
import PropTypes from "prop-types";
import styles from "./index.css";

const getTableRow = ({ id, cite, author }) => (
  <tr key={cite}>
    <td>{id}</td>
    <td className={styles.td1}>{cite}</td>
    <td className={styles.td2}>{author}</td>
  </tr>
);

const CitesTable = ({ data }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th>Id</th>
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
      id: PropTypes.string.isRequired,
      cite: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  )
};

export default CitesTable;
