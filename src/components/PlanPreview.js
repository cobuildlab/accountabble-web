import React from "react";
import { MDBCol, MDBRow } from "mdbreact";
import CoachingIcon from "../assets/img/Coaching-black.png";
import ActivitiesIcon from "../assets/img/Activities-black.png";
import ContentIcon from "../assets/img/Content-black.png";
import "../assets/scss/style.scss";

const PlanPreview = () => {
  return (
    <React.Fragment>
      <MDBCol md="12" className="text-center section-preview">
        <div className="d-flex d-flex justify-content-between">
          <div className="section-plan-circle">
            <img src={CoachingIcon} alt="" />
          </div>

          <div className="secction-plan-divider" />

          <div className="section-plan-circle">
            <img src={ActivitiesIcon} alt="" />
          </div>

          <div className="section-plan-circle">
            <img src={ContentIcon} alt="" />
          </div>
        </div>
      </MDBCol>
      <MDBCol md="12" className="text-center p-0">
        <MDBRow>
          <MDBCol>
            <h1 className="text-white text-center">Set Your Goal</h1>
            <p className="text-white text-center">
              Choose a Goal or habit you want to reach and the amount you'll pay if you don't stay on track. 
              As the data shows, the most reliable method for goal achievement is having a commitment contract.
            </p>
          </MDBCol>
          <MDBCol>
            <h1 className="text-white text-center">Take Action</h1>
            <p className="text-white text-center">
              Start taking action to achieve your goal 
              and taking photos or videos to show your progress.
              Action leads to more
              action. Motivation begets motivation.
            </p>
          </MDBCol>
          <MDBCol>
            <h1 className="text-white text-center">Feedback</h1>
            <p className="text-white text-center">
              Your coach will check on your files and you’ll receive a weekly report-card 
              showing your progress.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBCol>
    </React.Fragment>
  );
};

export default PlanPreview;
