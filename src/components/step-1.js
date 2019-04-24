import React from "react";
import '../assets/scss/style.scss';

//MDB
import { MDBInput, MDBBtn } from "mdbreact";


const Step1 = ({ onClick }) => {
  return (
    <React.Fragment>
    <h1 className="title text-left text-weight-bold mt-4">Basic Information</h1>
      <MDBInput className="input-bg-blue" label="Name" />
      <MDBInput className="input-bg-blue" label="Email" />
      <div className="text-right">
        <MDBBtn className="section-comment-btn-dark" onClick={() => onClick('next')}>Next</MDBBtn>
      </div>
    </React.Fragment>
  );
}

export default Step1;