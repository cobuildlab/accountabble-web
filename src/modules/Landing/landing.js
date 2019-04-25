import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
  MDBRow, 
  MDBCol,   
  MDBView, 
  MDBContainer,
  MDBBtn,
} from "mdbreact";

//img
import BgHeader from '../../assets/img/bg/background-home-web.png';

//css
import '../../assets/scss/style.scss';

//Components
import NavBar from '../../components/navbar';
import StepperVertical from '../../components/steppers-vertical';
import FormSubscribe from '../../components/form-subscribe'
import CardBlogSm from '../../components/card-blog-sm';
import CardBlogLg from '../../components/card-blog-lg';
import SectionComment from '../../components/section-comment';
import Footer from '../../components/footer';
import PlanPreviews from '../../components/plan-previews';
import PlanPreviesCarousel from '../../components/plan-previews-carousel';
import CardBlogCarousel from '../../components/card-blog-carousel'

class Landing extends Component {
  
  render(){
    return(
    <>
      {/* navbar component */}
      <NavBar/>

      <MDBView src={ BgHeader } fixed>
      </MDBView>
      <main>
        <div className="secction-plan">
          <MDBContainer>
            <MDBRow className="py-5">
              <MDBCol md="12">
                <h1 className="text-center text-white title-plan">Plan</h1>
              </MDBCol>
              <div className="d-none d-sm-block">
                <PlanPreviews/>
              </div>
              <div className="d-block d-sm-none">
                <PlanPreviesCarousel/>
              </div>
              <MDBCol md="12">
              <div className="text-center mt-5">
                <Link to='/plan' className="secction-plan-btn">Read More</Link>
              </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <div className="section-information">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <h1 className="text-white title">Lorem ipsum dolor sit amet, consectetur.</h1>
                <br/>
                <br/>
                <p> ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. Cras viverra est a est ornare dignissim. Suspendisse lobortis consectetur metus, sed viverra nisl porttitor ac. Proin a iaculis diam.</p>
                <p> ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. Cras viverra est a est ornare dignissim. Suspendisse lobortis consectetur metus, sed viverra nisl porttitor ac. Proin a iaculis diam.</p>
              </MDBCol>
              <MDBCol md="6">
                <StepperVertical/>
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
              <h2 className="text-center title-subscribe-blog">Subscribe For Our NewsLetter</h2>
              <FormSubscribe/>
            </div>
          </MDBContainer>
        </div>
        <Footer/>
      </main>
    </>
    );
  }

}
export default Landing;