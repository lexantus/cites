import React, { Component } from "react";
import AddCite from "../../components/AddCite";
import CitesTable from "../../components/CitesTable";
import styles from "./index.css";
import { connect } from "react-redux";
import { setData } from "../../actions";

const mapStateToProps = state => ({
  cites: state.requestData.data,
  isPending: state.requestData.isPending,
  error: state.requestData.error
});

const mapDispatchToProps = dispatch => ({
  onRequestData: () => dispatch(setData())
});

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestData();
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <AddCite />
        {this.props.isPending ? (
          <h1>Loading ...</h1>
        ) : (
          <CitesTable data={this.props.cites} />
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
