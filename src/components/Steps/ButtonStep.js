import React from "react";
import { MDBBtn } from "mdbreact";

const ButtonStep = ({
  className = "btn-step-2 mr-2 mb-3",
  onClick,
  text = "",
  active = false
}) => {
  return (
    <MDBBtn
      className={`${className} ${active ? "active-category" : ""}`}
      onClick={onClick}
    >
      {text}
    </MDBBtn>
  );
};

export default ButtonStep;
