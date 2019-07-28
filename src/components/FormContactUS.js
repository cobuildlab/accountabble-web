import React from "react";
import {MDBInput, MDBBtn} from "mdbreact";
import '../assets/scss/style.scss';
import View from 'react-flux-state';


class FormContactUS extends View {
  state = {
    name: "",
    email: "",
    comment: "",
    phone: "",
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


  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {comment, email, name, phone} = this.state;
    this.props.onSubmit({comment, email, name, phone});
  };

  render() {
    const {name, email, comment, phone, classNames} = this.state;
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
          className={classNames.email.input}
          label="Phone Number"
          onChange={this.onChange}
          name="phone"
          value={phone}
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
          <MDBBtn onClick={this.onSubmit} className="section-comment-btn-blue">Submit</MDBBtn>
        </div>
      </React.Fragment>
    );
  }
}

export default FormContactUS;
