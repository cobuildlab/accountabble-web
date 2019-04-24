import React from "react";
import '../assets/scss/style.scss'
import { MDBFormInline, MDBBtn } from 'mdbreact'

const FormSubscribe = () => {
  return (
    <React.Fragment>
      <MDBFormInline className="md-form mr-auto ml-auto">
        <input className="form-control mr-sm-2 input-bg-blue" type="Email" placeholder="Email" aria-label="Email" />
        <MDBBtn rounded size="sm" type="submit" className="mr-auto section-comment-btn-dark">
          Subscribe
        </MDBBtn>
      </MDBFormInline>
    </React.Fragment>
  );
}

export default FormSubscribe;