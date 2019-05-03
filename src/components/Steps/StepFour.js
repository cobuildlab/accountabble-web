import React from 'react';
import StepTitle from './StepTitle';

const StepFour = ({ onClick, onChange, value }) => {
  const [cardNumbers, setCardNumbers] = React.useState(value);

  return (
    <React.Fragment>
      <StepTitle message={"Credit Card"} />
    </React.Fragment>
  );
};

export default StepFour;