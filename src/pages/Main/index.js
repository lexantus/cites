import React, { Component } from "react";
import AddCite from "../../components/AddCite";
import CitesTable from "../../components/CitesTable";
import styles from "./index.css";
import { connect } from "react-redux";
import { getCites, getAuthors } from "../../actions";

const mapStateToProps = state => ({
  cites: state.requestData.cites,
  authors: state.requestData.authors,
  isPendingCites: state.requestData.isPendingCites,
  isPendingAuthors: state.requestData.isPendingAuthors,
  errorCites: state.requestData.errorCites,
  errorAuthors: state.requestData.errorAuthors
});

const mapDispatchToProps = dispatch => ({
  onRequestCites: () => dispatch(getCites()),
  onRequestAuthors: () => dispatch(getAuthors())
});

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestCites();
    this.props.onRequestAuthors();
  }

  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.isPendingAuthors ? (
          <h1>Loading ...</h1>
        ) : (
          <AddCite data={this.props.authors} />
        )}
        {this.props.isPendingCites ? (
          <h1>Loading ...</h1>
        ) : (
          <CitesTable data={this.props.cites} />
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
