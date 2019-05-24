import React from 'react';

const StepContainer = ({ children }) => (
  <>
    <div className="line-stepper"/>
      <div className="stepper d-flex justify-content-between">
      {children}
    </div>
  </>
);

export default StepContainer;