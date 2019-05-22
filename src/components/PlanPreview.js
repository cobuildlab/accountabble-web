import React from "react";
import { MDBCol, MDBRow  } from 'mdbreact';
import CoachingIcon from '../assets/img/Coaching-black.png';
import ActivitiesIcon from '../assets/img/Activities-black.png';
import ContentIcon from '../assets/img/Content-black.png';
import '../assets/scss/style.scss';

const PlanPreview = () => {
  return (
    <React.Fragment>
      <MDBCol md="12" className="text-center section-preview">
        <div className="d-flex d-flex justify-content-between">
          <div className="section-plan-circle">
            <img src={ CoachingIcon } alt=""/>
          </div>

          <div className="secction-plan-divider"/>

          <div className="section-plan-circle">
            <img src={ ActivitiesIcon } alt=""/>
          </div>

          <div className="section-plan-circle">
            <img src={ ContentIcon } alt=""/>
          </div>
        </div>
      </MDBCol>
      <MDBCol md="12" className="text-center p-0">
        <MDBRow>
          <MDBCol>
            <h1 className="text-white text-center">Plan</h1>
            <p className="text-white text-center">
              Each behavior and goal has a strategic plan, focused on specific tasks that will make you more productive and motivated to tackle challenges and complete your week feeling like you’re ahead and on top.
            </p>
          </MDBCol>
          <MDBCol>
            <h1 className="text-white text-center">ACT</h1>
            <p className="text-white text-center">
              The rules you’re given are comprehensive and based on minimal effort and dosage. They trigger the exact flip in emotions that you need to take actions. As the data shows, action leads to more action. Motivation begets motivation. 
            </p>
          </MDBCol>
          <MDBCol>
            <h1 className="text-white text-center">Feedback</h1>
            <p className="text-white text-center">
              You’ll receive a report card showing your progress so you can stay on track.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBCol>
    </React.Fragment>
  );
}

export default PlanPreview;