import React from 'react';
import { MDBRow, MDBCol, MDBView, MDBContainer } from 'mdbreact';
import { Link, animateScroll as scroll } from 'react-scroll';
import BgHeader from '../../assets/img/bg/background-home-web.png';
import CardBlogLarge from '../../components/CardBlogLarge';
import SectionComment from '../../components/SectionComment';
import PlanPreview from '../../components/PlanPreview';
import PlanPreviesCarousel from '../../components/PlanPreviewCarousel';
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
import 'react-modal-video/scss/modal-video.scss';
import '../../assets/scss/style.scss';

class LandingView extends View {
  constructor(props) {
    super(props);
    this.state = {
      currentStepInformation: {
        title: stepsInformation[0].title,
        description: stepsInformation[0].description,
        stepText: stepsInformation[0].stepText,
        image: stepsInformation[0].image,
      },
      blogs: {},
      blogItems: [],
      loading: true,
      updatedView: false,
      errorView: false,
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    // this.scrollToTop = this.scrollToTop.bind(this)
  }

  componentDidMount() {
    this.subscribe(stepperStore, ON_CHANGE_STEP, (currentStepInformation) => {
      if (currentStepInformation !== undefined)
        this.setState({
          currentStepInformation: {
            title: currentStepInformation.title,
            description: currentStepInformation.description,
            stepText: currentStepInformation.stepText,
            image: currentStepInformation.image,
          },
        });

      const { match, location, history } = this.props;
    });

    this.subscribe(blogStore, GET_BLOGS, (blogs) => {
      const { items } = blogs;
      const postsByDate = [...items].sort((a, b) => {
        const dateA = new Date(a.published);
        const dateB = new Date(b.published);
        return dateA - dateB;
      });
      this.setState({
        blogs: blogs,
        blogItems: postsByDate,
        updatedView: true,
        loading: false,
      });
    });

    this.subscribe(blogStore, ERROR_BLOGS, (err) => {
      this.setState({
        errorView: true,
        loading: false,
      });
    });

    getBlogsAction();
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    const {
      currentStepInformation: { title, description, stepText, image },
      loading,
      errorView,
      blogItems,
    } = this.state;

    // const { match, location, history } = this.props
    return (
      <RouteChangeContainer>
        <Navbar />
        <MDBView src={BgHeader} fixed>
          <div className={'d-flex p-2 flex-row align-items-end bg-100'}>
            <div className="p-4 flex-fill bg-item">
              <iframe
                title={'video'}
                className={'video-iframe'}
                src="https://www.youtube.com/embed/7Pb3HQYtDo8"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-2 flex-fill d-flex align-items-center flex-column bg-item justify-content-center">
              <h3 className="text-white title">BECOME A BETTER</h3>
              <h3 className="text-white title">VERSION OF YOURSELF</h3>
              <div className="button-start">
                <Link smooth={true} to="form">
                  Start Now
                </Link>
              </div>
            </div>
          </div>
        </MDBView>
        <main>
          <div className="secction-plan">
            <MDBContainer>
              <MDBRow className="py-5">
                <MDBCol md="12">
                  <h1 className="text-center text-white title-plan">ACCOUNTABBLE PATH</h1>
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
          <div id="form" className="section-information">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="4">
                  <h1 className="text-white title animated fadeIn">{title}</h1>
                  <br />
                  <p className="animated fadeIn text-form">{description}</p>
                  <div className={'animated fadeIn'}>
                    {/*<MediaQuote innextText={stepText} image={image}/>*/}
                  </div>
                </MDBCol>
                <MDBCol md="8">
                  <RegisterForm history={this.props.history} />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
          <div className="section-comment">
            <SectionComment />
          </div>
          <div id="blog" className="section-blog">
            <MDBContainer>
              <h1 id="blog" className="title-blog text-white text-center mb-5">
                Blog
              </h1>
              <div className="d-none d-sm-block">
                {loading ? (
                  <BlogSpinner status={loading} />
                ) : !errorView ? (
                  <MDBRow className="PB-5">
                    {blogItems.length === 1 && (
                      <React.Fragment>
                        <MDBCol md={'6'}>
                          <CardBlogLarge
                            blogTtile={blogItems[0].title}
                            content={blogItems[0].content}
                          />
                        </MDBCol>
                      </React.Fragment>
                    )}
                    {blogItems.length === 2 && (
                      <React.Fragment>
                        {blogItems.map((blog, index) => (
                          <MDBCol md={'6'} key={index}>
                            <CardBlogLarge
                              blogTtile={blog.title}
                              content={blog.content}
                              author={blog.author.displayName}
                              published={blog.published}
                            />
                          </MDBCol>
                        ))}
                      </React.Fragment>
                    )}
                    {blogItems.length >= 3 && (
                      <React.Fragment>
                        {blogItems
                          .filter((_, index) => index < 3)
                          .map((blog, index) => {
                            if (index === 1)
                              return (
                                <MDBCol md={'6'} key={index}>
                                  <CardBlogLarge
                                    blogTtile={blog.title}
                                    content={blog.content}
                                    author={blog.author.displayName}
                                    published={blog.published}
                                  />
                                </MDBCol>
                              );
                            return (
                              <MDBCol md={'3'} key={index}>
                                <CardBlogLarge
                                  blogTtile={blog.title}
                                  content={blog.content}
                                  author={blog.author.displayName}
                                  published={blog.published}
                                />
                              </MDBCol>
                            );
                          })}
                      </React.Fragment>
                    )}
                  </MDBRow>
                ) : (
                  <div className="d-flex justify-content-center animated fadeIn">
                    <h5 className="title-blog text-white text-center mb-5">
                      Something went wrong..
                    </h5>
                  </div>
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
