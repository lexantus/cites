import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { setAuthor, toggleAuthors } from '../../actions';
import AddAuthor from './AddAuthor';
import styles from './AuthorSelect.css';
import data from '../../data/authors.json';

const mapStateToProps = ({ author, isShowAuthorsList }) => ({
  author,
  isShowAuthorsList
});

const mapDispatchToProps = dispatch => ({
  onChangeAuthor: author => {
    dispatch(setAuthor(author));
    dispatch(toggleAuthors());
  },
  onClickHandler: () => {
    dispatch(toggleAuthors());
  }
});

class AuthorSelect extends Component {
  fetchData() {
    return data.map(element => (
      <div
        key={element.id}
        className={styles.option}
        onClick={e => this.props.onChangeAuthor(element, e)}
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
    return (
      <div>
        <div
          className={styles.trigger_options}
          tabIndex="2"
          onClick={this.props.onClickHandler}
        >
          <div className={styles.option}>
            <img src={this.props.author.photo} width="44" height="44" alt="" />
            <span className={styles.option__txt}>{this.props.author.name}</span>
          </div>
        </div>
        <div className={selectDropdownClass}>{this.fetchData()}</div>
        <AddAuthor />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorSelect);
