import React from "react";
import { MDBRow, MDBCol } from 'mdbreact';
import IconUser from '../assets/img/user.png';
import IconUserB from '../assets/img/user-b.png';
import IconCoaching from '../assets/img/Coaching-black.png';
import IconCoachingB from '../assets/img/Coaching-b.png';
import IconCheck from '../assets/img/check-black.png';
import IconCheckB from '../assets/img/check-b.png';
import IconCreditCard from '../assets/img/credit-card.png';
import IconCreditCardB from '../assets/img/credit-card-B.png';
import StepOne from './Steps/StepOne'
import StepTwo from './Steps/StepTwo'
import StepThree from './Steps/StepThree'
import '../assets/scss/style.scss'
import StepFour from "./Steps/StepFour";
import StepContainer from './Steps/StepContainer';
import { changeStepAction } from "./stepper-actions";
import { stepsInformation } from '../stores/stepper-store';


const StepperInformation = ({ onChange, onSubmit, values, loadingStepper }) => {
  const maxSteps = 4;
  const [step, setStep] = React.useState(1);
  const stepsMap = [
    { callback: (booleanProperty) => booleanProperty ? IconUserB : IconUser },
    { callback: (booleanProperty) => booleanProperty ? IconCoachingB : IconCoaching },
    { callback: (booleanProperty) => booleanProperty ? IconCreditCardB : IconCreditCard, className: 'pt-2' },
    { callback: (booleanProperty) => booleanProperty ? IconCheckB : IconCheck },
  ];

  /**
   * 
   * @param {string} stateFromStep
   * Check the argument on the function, and jump a step to show the current step.
   * @example
   * calculateStep('next') output: state + 1..
   * calculateStep('previous') output: state - 1.. 
   */
  function calculateStep (stateFromStep) {
    switch(stateFromStep) {
      case 'next': {
        changeStepAction(stepsInformation.find((stepInformation, index) => (index + 1) === step + 1));
        return step < maxSteps ? setStep(state => state + 1) : onSubmit();
      }
      case 'previous': {
        changeStepAction(stepsInformation.find((stepInformation, index) => (index + 1) === step - 1));
        return setStep(state => state - 1);
      }
      default: return;
    }
  }

  function getStepperByIndex (steppers) {
    const stepper = steppers.findIndex((_, index) => index + 1 === step);
    return steppers[stepper];
  };


  return (
    <React.Fragment>
      <MDBRow>
        <MDBCol md="2">
          <StepContainer>
            {stepsMap.map((property, index) => (
              <div className={(index + 1) === step ? 'circle-active-step' : 'circle-step'} key={index}>
                <img 
                  src={property.callback(index + 1 === step)} 
                  className={`img-fluid ${property.className ? property.className : ''}`} 
                  alt="icon"
                  />
              </div>
            ))}
          </StepContainer>
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
              onChange={(state) => onChange('terms', state)} />,
            <StepFour
              value={getStepperByIndex(values)}
              onClick={calculateStep}
              onChange={(state) => onChange('creditCard', state)}
              loadingForm={loadingStepper}
            />
            ],
            )}
        </MDBCol>
      </MDBRow>
    </React.Fragment>
  );
}

export default StepperInformation;