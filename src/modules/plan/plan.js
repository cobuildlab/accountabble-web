import React, { Component } from 'react';
import { MDBRow, MDBContainer, MDBCol} from 'mdbreact'
import { Link } from 'react-router-dom'

import {Icon} from 'react-icons-kit';
import {thinLeft} from 'react-icons-kit/entypo/thinLeft';
import Navbar from '../../components/Navbar';
import FooterComponent from '../../components/FooterComponent';
import StepperPlan from '../../components/StepperPlan';
import '../../assets/scss/style.scss';

const Plan = ({}) => {
  return(
    <React.Fragment>
      <Navbar/>
        <div className="secction-view">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12">
                <h1 className="text-center text-white title-plan pb-4">
                <span className="text-white float-left">
                  <Link className="link-nav ml-4" to="/">
                    <Icon icon={ thinLeft } size="38" />
                  </Link>
                </span>
                  Plan
                </h1>
                <StepperPlan />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      <FooterComponent/>
    </React.Fragment>
  );
}
export default Plan;