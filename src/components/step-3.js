import React from "react";
import { Link } from 'react-router-dom'
import '../assets/scss/style.scss';

//MDB
import { MDBInput, MDBBtn } from "mdbreact";

const Step1 = ({ onClick }) => {
  return (
    <React.Fragment>
    <h1 className="title text-left text-weight-bold mt-4">Finish</h1>
      {/* Material unchecked */}
      <div className="mt-4 mb-5">
        <label class="pure-material-checkbox">
          <input type="checkbox"/>
          <span><Link to="/" className="link-step-3">I agree to the terms and conditions</Link></span>
        </label>
        <label class="pure-material-checkbox">
          <input type="checkbox"/>
          <span>I want to receive newsletter</span>
        </label>
      </div>
      <div className="text-right">
        <MDBBtn className="section-comment-btn-dark" onClick={() => onClick('previous')}>Previous</MDBBtn>
        <MDBBtn className="section-comment-btn-dark" onClick={() => onClick('next')}>Finish</MDBBtn>
      </div>
    </React.Fragment>
  );
}

export default Step1;