import React, { Component } from 'react';
import {
  MDBRow, 
  MDBCol,   
  MDBView, 
  MDBContainer,
  MDBBtn,
  MDBFormInline
} from "mdbreact";

//img
import BgHeader from '../../assets/img/bg/background-home-web.png';
import CoachingIcon from '../../assets/img/Coaching-black.png';
import ActivitiesIcon from '../../assets/img/Activities-black.png';
import ContentIcon from '../../assets/img/Content-black.png';

//Components
import NavBar from '../../components/navbar';
import Stepper from '../../components/steppers';
import FormComment from '../../components/form-comment'
import FormSubscribe from '../../components/form-subscribe'

//css
import '../../assets/scss/style.scss';
import CardBlogSm from '../../components/card-blog-sm';
import CardBlogLg from '../../components/card-blog-lg';

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
              <MDBCol md="12" className="text-center">
                <h1 className="text-center text-white title">Plan</h1>

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
                  <div className="text-center mt-5">
                    <MDBBtn className="section-comment-btn-blue">Read More</MDBBtn>
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
                <Stepper/>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <div className="section-comment">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <h1 className="text-white title">Need something specific? <br/> Lorem ipsum dolor</h1>
                <hr/>
                <p className="text-comment"> ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. Cras viverra est a est ornare dignissim. Suspendisse lobortis consectetur metus, sed viverra nisl porttitor ac. Proin a iaculis diam.</p>
                <p className="text-comment"> ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. Cras viverra est a est ornare dignissim. Suspendisse lobortis consectetur metus, sed viverra nisl porttitor ac. Proin a iaculis diam.</p>
              </MDBCol>
              <MDBCol md="6" className="section-comment-form">
                <FormComment/>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <div id="blog" className="section-blog">
          <MDBContainer>
            <h1 className="title text-white text-center mb-5">Blog</h1>
            <MDBRow className="pb-5">
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
            <div className="d-flex flex-column justify-content-center mt-5">
              <h2 className="text-white text-center">Subscribe For Our NewsLetter</h2>
              <FormSubscribe/>
            </div>
          </MDBContainer>
        </div>
        <div className="footer">
          @Copy2019 All Right Reserved.
        </div>
      </main>
    </>
    );
  }

}
export default Landing;