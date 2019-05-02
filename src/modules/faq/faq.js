import React, { Component } from 'react';
import { MDBView, MDBMask, MDBRow, MDBContainer, MDBCol} from 'mdbreact'

//img
import BgHeader from '../../assets/img/bg/background-faq.png';

//css
import '../../assets/scss/style.scss';

//Components
import Navbar from '../../components/Navbar';
import FooterComponent from '../../components/FooterComponent';
import CollapseComponent from '../../components/faq-collapse';




class Faq extends Component {
  
  render(){
    return(
    <>
      {/* Navbar component */}
      <Navbar/>
      <MDBView className="about-bg-half-two" src={ BgHeader }>
        <MDBMask className="d-flex justify-content-center align-items-center">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <h1 class="display-3 mb-0 pt-md-5 pt-5 font-weight-bold white-text"><span>Frequent</span> <span className="primary-text font-weight-light">Question</span></h1>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>
      <main>
        <div className="section-faq">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <CollapseComponent/>
              </MDBCol>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <CollapseComponent/>
              </MDBCol>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <CollapseComponent/>
              </MDBCol>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <CollapseComponent/>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <FooterComponent/>
      </main>
    </>
    );
  }

}
export default Faq;