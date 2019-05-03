import React from "react";
import { MDBCol  } from 'mdbreact';

//css
import '../assets/scss/style.scss';

//img
import CoachingIcon from '../assets/img/Coaching-black.png';
import ActivitiesIcon from '../assets/img/Activities-black.png';
import ContentIcon from '../assets/img/Content-black.png';

const PlanPreviews = () => {
  return (
    <React.Fragment>
      <MDBCol md="12" className="text-center section-preview">
        <div class="d-flex d-flex justify-content-between">
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
      <MDBCol md="12" className="text-center">
        <div class="d-flex d-flex justify-content-between">
          <div>
          <h1 className="text-white text-center">Coaching</h1>
            <p className="text-white text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. 
            </p>
          </div>
          <div className="text-spacing-plan">
          <h1 className="text-white text-center">Activities</h1>
            <p className="text-white text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. 
            </p>
          </div>
          <div>
          <h1 className="text-white text-center">Content</h1>
            <p className="text-white text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. 
            </p>
          </div>
        </div>
      </MDBCol>
    </React.Fragment>
  );
}

export default PlanPreviews;