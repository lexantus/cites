import React, { Component } from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { Field } from "redux-form";
import { toggleAuthors } from "../../actions";
import AddAuthor from "./AddAuthor";
import styles from "./AuthorSelect.css";

const mapStateToProps = ({
  app: { isShowAuthorsList },
  requestData: { authors }
}) => ({
  isShowAuthorsList,
  authors
});

const mapDispatchToProps = dispatch => ({
  onClickHandler: () => {
    dispatch(toggleAuthors());
  }
});

class AuthorSelect extends Component {
  fetchData() {
    return this.props.authors.map(element => (
      <div
        key={element.id}
        className={styles.option}
        onClick={() => {
          this.props.input.onChange(element);
          this.props.onClickHandler();
        }}
      >
        <img src={element.photo} width="44" height="44" alt="" />
        <span className={styles.option__txt}>{element.name}</span>
      </div>
    ));
  }

  render() {
    const selectDropdownClass = classNames({
      [styles.options]: true,
      [styles.options_hide]: !this.props.isShowAuthorsList
    });
    const { input } = this.props;
    return (
      <div>
        <div
          className={styles.trigger_options}
          tabIndex="2"
          onClick={this.props.onClickHandler}
        >
          <div className={styles.option}>
            <img src={input.value.photo} width="44" height="44" alt="" />
            <span className={styles.option__txt}>{input.value.name}</span>
          </div>
        </div>
        <div className={selectDropdownClass}>{this.fetchData()}</div>
        <Field name="newAuthor" component={AddAuthor} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorSelect);
