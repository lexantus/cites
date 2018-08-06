import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import AuthorSelect from "./AuthorSelect";
import styles from "./index.css";

class AddCite extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(values) {
    console.log("E", values);
  }
  render() {
    return (
      <div className={styles.window}>
        <div className={styles.h1}>Add cite</div>
        <form method="POST" action="/cites" onSubmit={this.submit}>
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

const mapStateToProps = ({ authorImgFormData }) => ({
  initialValues: {
    cite: "Hello world",
    author: {
      id: 3,
      name: "Лебедев",
      photo: "lebedev.jpg"
    }
  },
  authorImgFormData
});

export default connect(mapStateToProps)(
  reduxForm({ form: "addCite" })(AddCite)
);
