import React from "react";
import "../assets/scss/style.scss";
import { MDBInput, MDBBtn } from "mdbreact";

const FormComment = () => {
  return (
    <React.Fragment>
      <MDBInput className="input-bg-dark" label="Name" />
      <MDBInput className="input-bg-dark" label="Email" />
      <MDBInput className="input-bg-dark" label="Comment" />
      <div className="text-right">
        <MDBBtn className="section-comment-btn-blue">Submit</MDBBtn>
      </div>
    </React.Fragment>
  );
};

export default FormComment;
