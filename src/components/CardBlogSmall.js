import React from "react";
import "../assets/scss/style.scss";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText
} from "mdbreact";

const CardBlogSm = () => {
  return (
    <React.Fragment>
      <MDBCard className="section-blog-card mb-4">
        <MDBCardImage
          className="img-fluid"
          src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
        />
        <MDBCardBody>
          <MDBCardTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </MDBCardTitle>
          <MDBCardText>
            Pellentesque semper, risus vitae tincidunt volutpat, quam dolor
            dictum tortor, lacinia blandit arcu sem et neque. Pellentesque
            hendrerit vitae massa eu tincidunt.
          </MDBCardText>
          <MDBBtn href="#" className="section-blog-btn-blue">
            Read this post
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </React.Fragment>
  );
};
export default CardBlogSm;
