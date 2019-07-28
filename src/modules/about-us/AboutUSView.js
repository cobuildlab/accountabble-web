import React from 'react';
import { MDBView, MDBMask, MDBRow, MDBContainer, MDBCol, MDBMedia} from 'mdbreact'
import Navbar from '../../components/Navbar';
import SectionComment from '../../components/SectionComment';
import FooterComponent from '../../components/FooterComponent';
import { SectionAboutUS, SectionAboutUSDescription, SectionCommentComponent } from '../../components/Sections';
import AboutUs from '../../assets/img/bg/aboutUs.png';
import IsoIcon from '../../assets/img/bg/accountabble-r.png';
import People1 from '../../assets/img/bg/people1.jpg';
import People2 from '../../assets/img/bg/people2.jpg';
import PeopleH from '../../assets/img/bg/people-h.png'
import Quotes from '../../assets/img/bg/quotes.png';
import '../../assets/scss/style.scss';
import RouteChangeContainer from '../../components/RouteChangeContainer';


const AboutUSView = () => {
  return (
    <RouteChangeContainer>
      <Navbar/>
      <MDBView className="about-bg-half" src={ AboutUs } fixed>
        <MDBMask className="d-flex justify-content-center align-items-center">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <h1 className="display-2 mb-0 pt-md-5 pt-5 primary-text font-weight-bold text-uppercase d-none d-sm-block">
                  <span> ABOUT </span>
                  <span className="white-text font-weight-light"> US </span>
                </h1>
                <h1 className="display-4 mb-0 pt-md-5 pt-5 mt-5 primary-text font-weight-bold text-uppercase d-block d-sm-none">
                  <span>ABOUT</span>
                  <span className="white-text font-weight-light"> US </span>
                </h1>
                <h2 className="pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 white-text text-left">
                  <span className="font-weight-bold">
                    We are a personal accountability platform that helps you become your best self. At Accountabble, beginners, coaches, friends, partners, seasoned self-development actors, and anyone who is on the path of growth meet and help each other reach their goals.
                  </span>
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
                    <h1 className="title text-white mb-4" heading={true.toString()}>
                    Our Motto
                    </h1>
                    <p>Become Your Best Self </p>
                    <p>Every human has an innate ability to transform the world. You are the drop of a ripple effect that can create innovation or mayhem. No matter where you find yourself right now, you can simply start walking the road of becoming your best self. </p>
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
                <h4 className="mb-4">“Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.” ― Rumi.</h4>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="6" className="text-right">
                <img src={PeopleH} alt="description" className="img-fluid mb-4"/>
                <h1>
                  It matters not how strait the gate,
                  How charged with punishments the scroll,
                  I am the master of my fate,
                  I am the captain of my soul.
                  -  WILLIAM ERNEST HENLEY
                </h1>
              </MDBCol>
              <MDBCol md="6">
                <img src={People2} alt="" className="img-fluid z-depth-2"/>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </SectionAboutUSDescription>
        <SectionCommentComponent>
          <SectionComment />
        </SectionCommentComponent>
      <FooterComponent/>
    </main>
  </RouteChangeContainer>
  );
};

export default AboutUSView;
