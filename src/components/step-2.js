import React from "react";
import '../assets/scss/style.scss';

//MDB
import { MDBInput, MDBBtn, MDBRow, MDBCol, MDBFormInline } from "mdbreact";

const Step1 = ({ onClick }) => {
  return (
    <React.Fragment>
    <h1 className="title text-left text-weight-bold mt-4">Coaching</h1>
      <div>
        <h6 className="title mt-2 mb-3">Category</h6>
        <MDBRow>
          <MDBCol md="4" className="col-xs-btn-step-2">
            <MDBBtn className="btn-step-2 mr-2 mb-3">Meditation</MDBBtn>
          </MDBCol>
          <MDBCol md="4" className="col-xs-btn-step-2">
            <MDBBtn className="btn-step-2 mr-2 mb-3">Sleep exercise</MDBBtn>
          </MDBCol>
          <MDBCol md="4" className="col-xs-btn-step-2">
            <MDBBtn className="btn-step-2 mb-3">Write/Read</MDBBtn>
          </MDBCol>
          <MDBCol md="4" className="col-xs-btn-step-2">
            <MDBBtn className="btn-step-2 mr-2 mb-3">Diet/eat</MDBBtn>
          </MDBCol>
          <MDBCol md="4" className="col-xs-btn-step-2">
            <MDBBtn className="btn-step-2 mr-2 mb-3">Healthy </MDBBtn>
          </MDBCol>
        </MDBRow>
        
        <MDBRow>
          
        </MDBRow>

        <h6 className="title mt-4 mb-3">Sets frequency a week</h6>
        <MDBRow className="mt-4">
          <MDBCol md="4" className="col-xs-btn-step-2">
            <MDBBtn className="btn-step-2 mr-2 mb-3">3</MDBBtn>
          </MDBCol>
          <MDBCol md="4" className="col-xs-btn-step-2">
            <MDBBtn className="btn-step-2 mr-2 mb-3">4</MDBBtn>
          </MDBCol>
          <MDBCol md="4" className="col-xs-btn-step-2">
            <MDBBtn className="btn-step-2 mr-2 mb-3">5</MDBBtn>
          </MDBCol>
        </MDBRow>
      </div>
      <h6 className="title mt-4 mb-3">Weeks</h6>
      <MDBFormInline className="md-form ">
        <input className="form-control input-bg-blue-step" type="text" placeholder="Weeks" aria-label="Weeks" />
      </MDBFormInline>
      <div className="text-right">
        <MDBBtn className="btn-step mr-3" onClick={() => onClick('previous')}>Previous</MDBBtn>
        <MDBBtn className="btn-step" onClick={() => onClick('next')}>Next</MDBBtn>
      </div>
    </React.Fragment>
  );
}

export default Step1;