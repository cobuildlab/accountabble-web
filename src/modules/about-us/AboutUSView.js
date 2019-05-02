import React from 'react';
import { MDBView, MDBMask, MDBRow, MDBContainer, MDBCol, MDBMedia} from 'mdbreact'

import Navbar from '../../components/Navbar';
import SectionComment from '../../components/section-comment';
import FooterComponent from '../../components/FooterComponent';
import { SectionAboutUS, SectionAboutUSDescription, SectionCommentComponent } from '../../components/Sections';

import BgHeader from '../../assets/img/bg/background-AboutUS.png';
import IsoIcon from '../../assets/img/bg/accountabble-r.png';
import People1 from '../../assets/img/bg/people1.jpg';
import People2 from '../../assets/img/bg/people2.jpg';
import PeopleH from '../../assets/img/bg/people-h.png'
import Quotes from '../../assets/img/bg/quotes.png';
import '../../assets/scss/style.scss';


const AboutUSView = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <MDBView className="about-bg-half" src={ BgHeader } fixed>
        <MDBMask className="d-flex justify-content-center align-items-center">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <h1 class="display-2 mb-0 pt-md-5 pt-5 primary-text font-weight-bold text-uppercase d-none d-sm-block">
                  <span> ABOUT </span> 
                  <span className="white-text font-weight-light"> US </span>
                </h1>
                <h1 class="display-4 mb-0 pt-md-5 pt-5 mt-5 primary-text font-weight-bold text-uppercase d-block d-sm-none">
                  <span>ABOUT</span> 
                  <span className="white-text font-weight-light"> US </span>
                </h1>
                <h2 className="pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 white-text text-left">"
                  <span className="font-weight-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque."
                </h2>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>
      <main>
        <SectionAboutUS>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12">
                <MDBMedia>
                  <MDBMedia left middle className="mr-3" href="#">
                    <img src={IsoIcon} alt="Accoutabble" className="img-fluid" />
                  </MDBMedia>
                  <MDBMedia body>
                    <h1 className="title text-white mb-4" heading>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h1>
                    <p>Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. Cras viverra est a est ornare dignissim. Suspendisse lobortis consectetur metus, sed viverra nisl porttitor ac. Proin a iaculis diam. Sed imperdiet libero magna, eget vulputate lacus iaculis et. Curabitur et nunc risus. </p>
                    <p>Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. Cras viverra est a est ornare dignissim. Suspendisse lobortis consectetur metus, sed viverra nisl porttitor ac. Proin a iaculis diam. Sed imperdiet libero magna, eget vulputate lacus iaculis et. Curabitur et nunc risus. </p>
                  </MDBMedia>
                </MDBMedia>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </SectionAboutUS>
        <SectionAboutUSDescription>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="5" xs="5">
                <img src={People1} alt="" className="img-fluid z-depth-2 mb-5"/>
              </MDBCol>
              <MDBCol md="6" xs="6">
                <img src={Quotes} alt="description" className="img-fluid mb-3"/>
                <h4 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt.</h4>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="6" className="text-right">
                <img src={PeopleH} alt="description" className="img-fluid mb-4"/>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
              </MDBCol>
              <MDBCol md="6">
                <img src={People2} alt="" className="img-fluid z-depth-2"/>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </SectionAboutUSDescription>
        <SectionCommentComponent>
          <SectionComment/>
        </SectionCommentComponent>
      <FooterComponent/>
    </main>
  </React.Fragment>
  );
};

export default AboutUSView;