import React from 'react';
import { MDBBtn } from 'mdbreact';

const ButtonStep = ({ className = "btn-step-2 mr-2 mb-3", onClick, text = '' }) => {
  return (
    <MDBBtn className="btn-step-2 mr-2 mb-3" onClick={onClick} className={className}>
      {text}
    </MDBBtn>
  )
};

export default ButtonStep;