import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./index.css";
import Pagination from "../Pagination";

class CitesTable extends Component {
  static getTableRow({ id, cite, author }) {
    return (
      <tr key={id}>
        <td>{id}</td>
        <td className={styles.td1}>{cite}</td>
        <td className={styles.td2}>{author}</td>
      </tr>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      perPage: 10
    };
  }

  clickPagination(i) {
    this.setState({ activePage: i });
  }

  render() {
    const firstIndex = (this.state.activePage - 1) * this.state.perPage;
    const secondIndex = firstIndex + this.state.perPage;
    const ar = this.props.data.slice(firstIndex, secondIndex);

    return (
      <div>
        <Pagination
          total={this.props.data.length}
          itemsPerPage={this.state.perPage}
          activePage={this.state.activePage}
          clickHandler={i => this.clickPagination(i)}
        />
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Cite</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>{ar.map(CitesTable.getTableRow)}</tbody>
        </table>
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
