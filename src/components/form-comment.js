import React from "react";
import '../assets/scss/style.scss';

//MDB
import { MDBInput, MDBBtn } from "mdbreact";

const FormComment = () => {
  return (
    <React.Fragment>
      <MDBInput label="Name" />
      <MDBInput label="Email" />
      <MDBInput label="Comment" />
      <div className="text-right">
        <MDBBtn className="section-comment-btn-blue">Submit</MDBBtn>
      </div>
    </React.Fragment>
  );
}

export default FormComment;