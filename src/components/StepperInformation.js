import React from "react";
import { MDBRow, MDBCol } from 'mdbreact'

//image
import IconUser from '../assets/img/user.png'
import IconUserB from '../assets/img/user-b.png'
import IconCoaching from '../assets/img/Coaching-black.png'
import IconCheck from '../assets/img/check-black.png'

//component
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

//css
import '../assets/scss/style.scss'


const StepperInformation = ({ onChange = function() {}, onStep = function() {}, values}) => {
  const [step, setStep] = React.useState(0);
  function calculateStep (stateFromStep) {
    onStep(step);
    switch(stateFromStep) {
      case 'next': setStep(state => state + 1);
      break;
      case 'previous': setStep(state => state - 1);
      break;
      default: return;
    }
  }

  function getStepperByIndex (steppers) {
    const stepper = steppers.findIndex((_, index) => index === step);
    return steppers[stepper];
  };

  return (
    <React.Fragment>
      <MDBRow>
        <MDBCol md="2">
          <div className="line-stepper"/>
          <div className="stepper d-flex justify-content-between">
            <div className={"circle-active-step"}>
              <img src={IconUserB} alt="User" className="img-fluid"/>
            </div>
            <div className={"circle-step"}>
              <img src={IconCoaching} alt="User" className="img-fluid"/>
            </div>
            <div className="circle-step">
              <img src={IconCheck} alt="User" className="img-fluid pt-2"/>
            </div>
          </div>
        </MDBCol>
        <MDBCol md="10" className="pl-5 pr-5">
          {getStepperByIndex([
            <StepOne
              value={getStepperByIndex(values)}
              onClick={calculateStep} 
              onChange={(state) => onChange('basicInformation', state)} 
            />, 
            <StepTwo
              value={getStepperByIndex(values)} 
              onClick={calculateStep} 
              onChange={(state) => onChange('coaching', state)} 
            />, 
            <StepThree
              value={getStepperByIndex(values)} 
              onClick={calculateStep} 
              onChange={(state) => onChange('terms', state)} />
            ]
            )}
        </MDBCol>
      </MDBRow>
    </React.Fragment>
  );
}

export default StepperInformation;