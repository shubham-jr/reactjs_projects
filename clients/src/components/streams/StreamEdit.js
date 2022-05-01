import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchStream, editStream } from "./../../actions";
import StreamForm from "./StreamForm";
class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    console.log(this.props);
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    console.log(this.props);
    if (!this.props.stream) return <div>Loading!!!</div>;
    return (
      <div>
        <h3>Edit a stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.stream, "title", "description")}
        ></StreamForm>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
