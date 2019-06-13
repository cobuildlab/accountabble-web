import React from "react";
import {MDBRow, MDBCol} from "mdbreact";
import IconUser from "../assets/img/user.png";
import IconUserB from "../assets/img/user-b.png";
import IconCoaching from "../assets/img/Coaching-black.png";
import IconCoachingB from "../assets/img/Coaching-b.png";
import IconCheck from "../assets/img/check-black.png";
import IconCheckB from "../assets/img/check-b.png";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import "../assets/scss/style.scss";
// import StepFour from "./Steps/StepFour";
import StepContainer from "./Steps/StepContainer";
import {changeStepAction} from "./stepper-actions";
import {stepsInformation} from "../stores/stepper-store";
import {Progress} from "reactstrap";
import RegisterSpinner from "../modules/register/components/RegisterSpinner";

const stepsList = [
  {callback: booleanProperty => (booleanProperty ? IconUserB : IconUser)},
  {
    callback: booleanProperty =>
      booleanProperty ? IconCoachingB : IconCoaching
  },
  {callback: booleanProperty => (booleanProperty ? IconCheckB : IconCheck)}
];

const getCurrentProgress = (currentStep, maxSteps) => Math.ceil(((currentStep - 1) / maxSteps) * 150);

const StepperInformation = ({onChange, onSubmit, values, loadingStepper}) => {
  const maxSteps = 3;
  const [step, setStep] = React.useState(1);

  /**
   *
   * @param {string} stateFromStep
   * Check the argument on the function, and jump a step to show the current step.
   * @example
   * calculateStep('next') output: state + 1..
   * calculateStep('previous') output: state - 1..
   */
  function calculateStep(stateFromStep, token) {
    console.log(`DEBUG:`, stateFromStep, step, maxSteps, token);
    switch (stateFromStep) {
      case "next": {
        // Notify for step change
        changeStepAction(stepsInformation[step]);
        return setStep(state => state + 1);
      }
      case "previous": {
        changeStepAction(stepsInformation[step - 2]);
        return setStep(state => state - 1);
      }
      case "finish": {
        onSubmit(token);
        return;
      }
      default:
        return;
    }
  }

  const steps = [
    <StepOne
      value={values[0]}
      onClick={calculateStep}
      onChange={state => onChange("basicInformation", state)}
    />,
    <StepTwo
      value={values[1]}
      onClick={calculateStep}
      onChange={state => onChange("coaching", state)}
    />,
    <StepThree
      value={values[2]}
      onClick={calculateStep}
      onChange={state => onChange("terms", state)}
    />
  ];

  return (
    <React.Fragment>
      <MDBRow>
        <MDBCol md="2">
          <StepContainer>
            {stepsList.map((property, index) => (
              <div
                className={
                  index + 1 === step ? "circle-active-step" : "circle-step"
                }
                key={index}
              >
                <img
                  src={property.callback(index + 1 === step)}
                  className={`img-fluid ${
                    property.className ? property.className : ""
                    }`}
                  alt="icon"
                />
              </div>
            ))}
          </StepContainer>
        </MDBCol>
        <MDBCol md="10" className="pl-5 pr-5">
          <div className={"text-center"}>
            <small className="text-white font-weight-bold">
              {" "}
              {getCurrentProgress(step, maxSteps)}%
            </small>
          </div>
          <Progress
            value={getCurrentProgress(step, maxSteps)}
            className={"bg-custom-dark"}
          />
          {steps[step - 1]}
          {(loadingStepper) && <RegisterSpinner status={true}/>}
        </MDBCol>
      </MDBRow>
    </React.Fragment>
  );
};

export default StepperInformation;
