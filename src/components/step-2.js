import React from "react";
import '../assets/scss/style.scss';

//MDB
import { MDBInput, MDBBtn, MDBRow, MDBCol } from "mdbreact";

const Step1 = ({ onClick }) => {
  return (
    <React.Fragment>
    <h1 className="title text-left text-weight-bold mt-4">Coaching</h1>
      <div>
        <h6 className="title mt-4 mb-3">Category</h6>
        <MDBRow>
          <MDBCol md="4">
            <MDBBtn className="btn-step-2 mr-2">Meditation</MDBBtn>
          </MDBCol>
          <MDBCol md="4">
            <MDBBtn className="btn-step-2 mr-2">Sleep exercise</MDBBtn>
          </MDBCol>
          <MDBCol md="4">
            <MDBBtn className="btn-step-2">Write/Read</MDBBtn>
          </MDBCol>
        </MDBRow>
        
        <MDBRow className="mt-4">
          <MDBCol md="4">
            <MDBBtn className="btn-step-2 mr-2">Diet/eat</MDBBtn>
          </MDBCol>
          <MDBCol md="4">
            <MDBBtn className="btn-step-2 mr-2">Healthy </MDBBtn>
          </MDBCol>
          <MDBCol md="4">
          </MDBCol>
        </MDBRow>

        <h6 className="title mt-4 mb-3">Sets frequency a week</h6>
        <MDBRow className="mt-4">
          <MDBCol md="4">
            <MDBBtn className="btn-step-2 mr-2">3</MDBBtn>
          </MDBCol>
          <MDBCol md="4">
            <MDBBtn className="btn-step-2 mr-2">4</MDBBtn>
          </MDBCol>
          <MDBCol md="4">
            <MDBBtn className="btn-step-2 mr-2">5</MDBBtn>
          </MDBCol>
        </MDBRow>
      </div>
      <h6 className="title mt-4 mb-3">Weeks</h6>
      <MDBInput className="input-bg-blue" label="Weeks"/>
      <div className="text-right">
        <MDBBtn className="section-comment-btn-dark mr-3" onClick={() => onClick('previous')}>Previous</MDBBtn>
        <MDBBtn className="section-comment-btn-dark" onClick={() => onClick('next')}>Next</MDBBtn>
      </div>
    </React.Fragment>
  );
}

export default Step1;