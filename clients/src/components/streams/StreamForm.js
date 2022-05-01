import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    console.log(meta);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input}></input>
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter the title"
        ></Field>
        <Field
          name="description"
          component={this.renderInput}
          label="Enter the description"
        ></Field>
        <button className="ui button primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Please enter a valid title";
  }
  if (!formValues.description) {
    errors.description = "Please enter a valid description";
  }
  return errors;
};

export default reduxForm({ form: "streamForm", validate })(StreamForm);
