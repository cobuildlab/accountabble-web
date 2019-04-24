import React from "react";
import '../assets/scss/style.scss'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import FormComment from "./form-comment";

const SectionComment = () => {
  return (
    <React.Fragment>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <h1 className="text-white title">Need something specific? <br/> Lorem ipsum dolor</h1>
            <hr/>
            <p className="text-comment"> ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. Cras viverra est a est ornare dignissim. Suspendisse lobortis consectetur metus, sed viverra nisl porttitor ac. Proin a iaculis diam.</p>
            <p className="text-comment"> ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. Cras viverra est a est ornare dignissim. Suspendisse lobortis consectetur metus, sed viverra nisl porttitor ac. Proin a iaculis diam.</p>
          </MDBCol>
          <MDBCol md="6" className="section-comment-form">
            <FormComment/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  );
}

export default SectionComment;