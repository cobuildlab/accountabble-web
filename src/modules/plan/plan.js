import React, { Component } from 'react';
import { MDBView, MDBMask, MDBRow, MDBContainer, MDBCol} from 'mdbreact'
import { Link } from 'react-router-dom'

import {Icon} from 'react-icons-kit'
import {thinLeft} from 'react-icons-kit/entypo/thinLeft'

//img
import BgHeader from '../../assets/img/bg/background-faq.png';

//css
import '../../assets/scss/style.scss';

//Components
import NavBar from '../../components/navbar';
import FooterComponent from '../../components/footer'
import StepperPlan from '../../components/steppers-plan'




class Plan extends Component {
  
  render(){
    return(
    <>
      {/* navbar component */}
      <NavBar/>
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
                <StepperPlan/>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <FooterComponent/>
    </>
    );
  }

}
export default Plan;