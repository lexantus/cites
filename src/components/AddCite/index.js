import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { createCite } from "../../actions";
import AuthorSelect from "./AuthorSelect";
import styles from "./index.css";
import PropTypes from "prop-types";

class AddCite extends Component {
  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
      <div className={styles.window}>
        <div className={styles.h1}>Add cite</div>
        <form
          method="POST"
          action="/cites/create"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className={styles.label} htmlFor="cite">
            Cite
          </label>
          <Field className={styles.textarea} name="cite" component="textarea" />
          <div className={styles.textareaRectWrapper}>
            <div className={styles.textareaRect} />
          </div>
          <label className={styles.label} htmlFor="author">
            Author
          </label>
          <Field name="author" component={AuthorSelect} />
          <button className={styles.submit} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

AddCite.defaultProps = {
  data: []
};

AddCite.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      photo: PropTypes.string
    })
  )
};

const mapStateToProps = ({ authorImgFormData }) => ({
  // initialValues: {
  //   cite: "Hello world",
  //   author: {
  //     id: 3,
  //     name: "Лебедев",
  //     photo: ""
  //   }
  // },
  authorImgFormData
});

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(createCite(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: "addCite"
  })(AddCite)
);
