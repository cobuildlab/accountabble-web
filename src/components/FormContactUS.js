import React from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import "../assets/scss/style.scss";
import View from "react-flux-state";
import indexStore, {
  CONTACT_US_CALLBACK,
  CONTACT_US_ERROR
} from "../stores/index-store";

class FormContactUS extends View {
  state = {
    name: "",
    email: "",
    comment: "",
    classNames: {
      name: {
        error: null,
        input: "input-bg-dark"
      },
      email: {
        error: null,
        input: "input-bg-dark"
      },
      comment: {
        error: null,
        input: "input-bg-dark"
      }
    }
  };

  componentDidMount() {
    this.subscribe(indexStore, CONTACT_US_CALLBACK, response => {});

    this.subscribe(indexStore, CONTACT_US_ERROR, err => {});
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, email, comment, classNames } = this.state;
    return (
      <React.Fragment>
        <MDBInput
          type="text"
          className={classNames.name.input}
          name="name"
          label="Name"
          onChange={this.onChange}
          value={name}
        />
        <MDBInput
          type="email"
          className={classNames.email.input}
          label="Email"
          onChange={this.onChange}
          name="email"
          value={email}
        />
        <MDBInput
          type="text"
          className={classNames.comment.input}
          label="Comment"
          name="comment"
          onChange={this.onChange}
          value={comment}
        />
        <div className="text-right">
          <MDBBtn className="section-comment-btn-blue">Submit</MDBBtn>
        </div>
      </React.Fragment>
    );
  }
}

export default FormContactUS;
