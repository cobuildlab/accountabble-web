import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBRow, 
  MDBCol,   
  MDBView, 
  MDBContainer,
} from "mdbreact";

import BgHeader from '../../assets/img/bg/background-home-web.png';
import FormSubscribe from '../../components/form-subscribe'
import CardBlogSm from '../../components/card-blog-sm';
import CardBlogLg from '../../components/card-blog-lg';
import SectionComment from '../../components/section-comment';
import PlanPreview from '../../components/PlanPreview';
import PlanPreviesCarousel from '../../components/plan-previews-carousel';
import CardBlogCarousel from '../../components/card-blog-carousel'
import RegisterForm from '../register/RegisterForm';
import Footer from '../../components/FooterComponent';
import Navbar from '../../components/Navbar';
import RouteChangeContainer from '../../components/RouteChangeContainer';
import View from 'react-flux-state';
import stepperStore, { ON_CHANGE_STEP, stepsInformation } from '../../stores/stepper-store';

class LandingView extends View {
  constructor(props) {
    super(props);
    this.state = {
      currentStepInformation: {
        title: stepsInformation[0].title,
        description: stepsInformation[0].description
      }
    };
  }

  componentDidMount() {
    this.subscribe(stepperStore, ON_CHANGE_STEP, (currentStepInformation) => {
      this.setState({
        currentStepInformation: {
          title: currentStepInformation.title,
          description: currentStepInformation.description
        }
      });
    });
  };


  render() {
    const { currentStepInformation: { title, description } } = this.state;
    return (
      <RouteChangeContainer>
        <Navbar/>
          <MDBView src={ BgHeader } fixed></MDBView>
          <main>
            <div className="secction-plan">
              <MDBContainer>
                <MDBRow className="py-5">
                  <MDBCol md="12">
                    <h1 className="text-center text-white title-plan">Plan</h1>
                  </MDBCol>
                  <div className="d-none d-sm-block">
                    <PlanPreview />
                  </div>
                  <div className="d-block d-sm-none">
                    <PlanPreviesCarousel />
                  </div>
                </MDBRow>
              </MDBContainer>
            </div>
            <div className="section-information">
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="6">
                    <h1 className="text-white title animated fadeIn">
                      {title}
                    </h1>
                    <br/>
                    <p className="animated fadeIn">
                      {description}
                    </p>
                  </MDBCol>
                  <MDBCol md="6">
                    <RegisterForm />
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>
            <div className="section-comment">
              <SectionComment/>
            </div>
            <div id="blog" className="section-blog">
              <MDBContainer>
                <h1 className="title-blog text-white text-center mb-5">Blog</h1>
                <div className="d-none d-sm-block">
                  <MDBRow className="pb-5 ">
                    <MDBCol md="3">
                      <CardBlogSm/>
                    </MDBCol>
                    <MDBCol md="6">
                      <CardBlogLg/>
                    </MDBCol>
                    <MDBCol md="3">
                      <CardBlogSm/>
                    </MDBCol>
                  </MDBRow>
                </div>
                <div className="d-block d-sm-none">
                  <CardBlogCarousel/>
                </div> 
                <div className="d-flex flex-column justify-content-center mt-5">
                  <h2 className="text-center title-subscribe-blog">
                    Subscribe For Our NewsLetter
                  </h2>
                  <FormSubscribe/>
                </div>
            </MDBContainer>
          </div>
          <Footer />
        </main>
      </RouteChangeContainer>
    );
  }
}


export default LandingView;