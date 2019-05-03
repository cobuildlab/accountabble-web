import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const CardComponent = ({ 
  image = 'https://mdbootstrap.com/img/Photos/Others/images/43.jpg', 
  title = 'Default Title',
  description = 'Default Description'
}) => {
  return (
    <MDBCol className="mt-3">
      <MDBCard style={{ width: "22em" }} className="card-component">
          <MDBCardBody>
            <MDBCardTitle className="mb-4">{title}</MDBCardTitle>
            <MDBCardText>
              {description}
            </MDBCardText>
          </MDBCardBody>
    </MDBCard>
  </MDBCol>
  );
};

export default CardComponent;