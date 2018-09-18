import React from "react";
import PropTypes from "prop-types";
import styles from "./index.css";
import Pagination from "../Pagination";

class CitesTable extends Component {
  constructor({ data }) {
    super(data);
  }

  render() {
    const getTableRow = ({ id, cite, author }) => (
      <tr key={cite}>
        <td>{id}</td>
        <td className={styles.td1}>{cite}</td>
        <td className={styles.td2}>{author}</td>
      </tr>
    );

    return (
      <div>
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
        <Pagination
          total={100}
          itemsPerPage={10}
          activePage={1}
          clickHandler={i => console.log("click on ", i)}
        />
      </div>
    );
  }
}

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
