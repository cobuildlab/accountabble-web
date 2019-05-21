import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBRow, 
  MDBCol,   
  MDBView, 
  MDBContainer,
} from "mdbreact";

import BgHeader from '../../assets/img/bg/background-home-web.png';
import FormSubscribe from '../../components/FormSubscribe'
import CardBlogSmall from '../../components/CardBlogSmall';
import CardBlogLarge from '../../components/CardBlogLarge';
import SectionComment from '../../components/SectionComment';
import PlanPreview from '../../components/PlanPreview';
import PlanPreviesCarousel from '../../components/plan-previews-carousel';
import CardBlogCarousel from '../../components/CardBlogCarousel';
import RegisterForm from '../register/RegisterForm';
import Footer from '../../components/FooterComponent';
import Navbar from '../../components/Navbar';
import RouteChangeContainer from '../../components/RouteChangeContainer';
import View from 'react-flux-state';
import stepperStore, { ON_CHANGE_STEP, stepsInformation } from '../../stores/stepper-store';
import blogStore, { GET_BLOGS, ERROR_BLOGS } from '../blogs/blog-store';
import { getBlogsAction } from '../blogs/blog-actions';
import BlogSpinner from './components/BlogSpinner';

class LandingView extends View {
  constructor(props) {
    super(props);
    this.state = {
      currentStepInformation: {
        title: stepsInformation[0].title,
        description: stepsInformation[0].description
      },
      blogs: {},
      blogItems: [],
      loading: true,
      updatedView: false
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

    this.subscribe(blogStore, GET_BLOGS, (blogs) => {
      const { items } = blogs;
      console.log(items);
      const postsByDate = [...items].sort((a, b) => {
        const dateA = new Date(a.published);
        const dateB = new Date(b.published);
        return dateA - dateB;
      });
      this.setState({
        blogs: blogs,
        blogItems: postsByDate,
        updatedView: true,
        loading: false
      });
    });

    this.subscribe(blogStore, ERROR_BLOGS, (err) => {
      console.log(err);
    });

    getBlogsAction();
  };


  render() {
    const { currentStepInformation: { title, description }, loading, blogItems } = this.state;
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
                  {loading ? (
                    <BlogSpinner status={loading} />
                  ) : (
                    <MDBRow className="PB-5">
                      {blogItems.length === 1 && (
                        <div className="d-flex justify-content-center animated fadeIn ">
                          <MDBCol md={"6"}>
                            <CardBlogLarge blogTtile={blogItems[0].title} />
                          </MDBCol>
                        </div>
                      )}
                      {blogItems.length === 2 && (
                         <div className="d-flex justify-content-center animated fadeIn">
                          {blogItems.map((blog, index) => (
                            <MDBCol md={"6"} key={index}>
                              <CardBlogLarge blogTtile={blog.title} />
                            </MDBCol>
                          ))}
                        </div>
                      )}
                    </MDBRow>
                  )}
                  {/* <MDBCol md="3">
                      <CardBlogSmall />
                    </MDBCol>
                    <MDBCol md="6">
                      <CardBlogLarge />
                    </MDBCol>
                    <MDBCol md="3">
                      <CardBlogSmall />
                    </MDBCol>
                  </MDBRow> */}
                </div>
                <div className="d-block d-sm-none">
                  <CardBlogCarousel />
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