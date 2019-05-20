import React from "react";
import { MDBCol, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";

//css
import '../assets/scss/style.scss';

//img
import CoachingIcon from '../assets/img/Coaching-black.png';
import ActivitiesIcon from '../assets/img/Activities-black.png';
import ContentIcon from '../assets/img/Content-black.png';

import '../assets/scss/style.scss'

const PlanPreviesCarousel = () => {
  return (
    <React.Fragment>
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <MDBCol sm="12" className="text-center">
                  <div className="d-flex d-flex justify-content-center">
                    <div className="section-plan-circle">
                      <img src={ CoachingIcon } alt=""/>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-white text-center">Coaching</h1>
                    <p className="text-white text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. 
                    </p>
                  </div>
                </MDBCol>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <MDBCol sm="12" className="text-center">
                  <div className="d-flex d-flex justify-content-center">
                    <div className="section-plan-circle">
                      <img src={ ActivitiesIcon } alt=""/>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-white text-center">Activities</h1>
                    <p className="text-white text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. 
                    </p>
                  </div>
                </MDBCol>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <MDBCol sm="12" className="text-center">
                  <div className="d-flex d-flex justify-content-center">
                    <div className="section-plan-circle">
                      <img src={ ContentIcon } alt=""/>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-white text-center">Content</h1>
                    <p className="text-white text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. 
                    </p>
                  </div>
                </MDBCol>
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </React.Fragment>
  );
}

export default PlanPreviesCarousel;