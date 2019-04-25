import React from "react";
import { MDBRow, MDBCol } from 'mdbreact'

//image
import IconUser from '../assets/img/user.png'
import IconUserB from '../assets/img/user-b.png'
import IconCoaching from '../assets/img/Coaching-black.png'
import IconCheck from '../assets/img/check-black.png'

//component
import Step1 from '../components/step-1'
import Step2 from '../components/step-2'
import Step3 from '../components/step-3'

//css
import '../assets/scss/style.scss'


const StepperVertical = () => {
  const [step, setStep] = React.useState(0);
  const [status, setStatus] = React.useState([{ active: true }, { active: false }, { active: false }]);

  function calculateStep (stateFromStep) {
    switch(stateFromStep) {
      case 'next': return setStep(state => state + 1);
      case 'previous': return setStep(state => state - 1);
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
          {getStepperByIndex([<Step1 onClick={calculateStep}/>, <Step2 onClick={calculateStep} />, <Step3 onClick={calculateStep} />])}
        </MDBCol>
      </MDBRow>
    </React.Fragment>
  );
}

export default StepperVertical;