import React, { Component } from 'react';
import {  MDBRow, MDBContainer, MDBCol} from 'mdbreact'
import { Link } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import { thinLeft } from 'react-icons-kit/entypo/thinLeft'
import Navbar from '../../components/Navbar';
import FooterComponent from '../../components/FooterComponent'
import '../../assets/scss/style.scss';
import RouteChangeContainer from '../../components/RouteChangeContainer';
import TermsInformation from './components/TermsInformation';

class TermsView extends Component {
  render(){
    return(
    <RouteChangeContainer>
      <Navbar/>
        <div className="secction-view">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12">
                <h1 className="text-center text-white title-plan mb-5">
                <span className="text-white float-left">
                  <Link className="link-nav" to="/">
                    <Icon icon={ thinLeft } size="38" />
                  </Link>
                </span>
                Terms & Conditions
                </h1>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <TermsInformation />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <FooterComponent/>
    </RouteChangeContainer>
    );
  }

}
export default TermsView;