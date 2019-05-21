import React from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
import PropTypes from 'prop-types';
import '../assets/scss/style.scss'


const CardBlogLarge = ({ blogTtile }) => {
  return (
    <React.Fragment>
      <MDBCard className="section-blog-card mb-4">
      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>{blogTtile}</MDBCardTitle>
          <MDBCardText>
            Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. Cras viverra est a est ornare dignissim. Suspendisse lobortis consectetur metus, sed viverra nisl porttitor ac. Proin a iaculis diam.
          </MDBCardText>
          <MDBCardText>
            Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. Cras viverra est a est ornare dignissim. Suspendisse lobortis consectetur metus, sed viverra nisl porttitor ac. Proin a iaculis diam.
          </MDBCardText>
          <MDBBtn href="#" className="section-blog-btn-blue">Read this post</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </React.Fragment>
  );
};

CardBlogLarge.propTypes = {
  blogTtile: PropTypes.string
};


export default CardBlogLarge;