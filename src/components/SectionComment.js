import React from "react";
import "../assets/scss/style.scss";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import FormContactUS from "./FormContactUS";

const SectionComment = () => {
  return (
    <React.Fragment>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <h1 className="text-white title">Contact US</h1>
            <hr />
            <p className="text-comment">
              Your growth is our #1 priority. We are here to provide more
              information, answer any question you may have and create an
              effective solution for your advancement.
            </p>
          </MDBCol>
          <MDBCol md="6" className="section-comment-form">
            <FormContactUS />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  );
};

export default SectionComment;
