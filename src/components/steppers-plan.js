import React from "react";
import { MDBRow, MDBCol } from 'mdbreact'


//image
import IconUser from '../assets/img/user.png'
import IconUserB from '../assets/img/user-b.png'
import IconCoaching from '../assets/img/Coaching-black.png'
import IconCheck from '../assets/img/check-black.png'
import IconContent from '..//assets/img/Content-black.png'
import '../assets/scss/style.scss'


const StepperPlan = () => {

  return (
    <React.Fragment>
      <MDBRow className="mt-4">
        <MDBCol md="12">
          <div class="step completed">
            <div class="v-stepper">
              <div class="circle">
              <img src={IconUser} alt="User" className="img-fluid"/>
              </div>
              <div class="line"></div>
            </div>

            <div class="content">
              <h1 className="text-white title">Coaching</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. Cras viverra est a est ornare dignissim. Suspendisse lobortis consectetur metus, sed viverra nisl porttitor ac. Proin a iaculis diam.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. Cras viverra est a est ornare dignissim. Suspendisse lobortis consectetur metus, sed viverra nisl porttitor ac. Proin a iaculis diam.</p>
            </div>
          </div>

          <div class="step completed">
            <div class="v-stepper">
              <div class="circle">
              <img src={IconCoaching} alt="User" className="img-fluid"/>
              </div>
              <div class="line"></div>
            </div>

            <div class="content">
              <h1 className="text-white title">Activities</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. Cras viverra est a est ornare dignissim. Suspendisse lobortis consectetur metus, sed viverra nisl porttitor ac. Proin a iaculis diam.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. Cras viverra est a est ornare dignissim. Suspendisse lobortis consectetur metus, sed viverra nisl porttitor ac. Proin a iaculis diam.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque.</p>
            </div>
          </div>

          <div class="step completed">
            <div class="v-stepper">
              <div class="circle">
              <img src={IconContent} alt="User" className="img-fluid"/>
              </div>
              <div class="line"></div>
            </div>

            <div class="content">
              <h1 className="text-white title">Content</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. Cras viverra est a est ornare dignissim. Suspendisse lobortis consectetur metus, sed viverra nisl porttitor ac. Proin a iaculis diam.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. Cras viverra est a est ornare dignissim. Suspendisse lobortis consectetur metus, sed viverra nisl porttitor ac. Proin a iaculis diam.</p>
            </div>
          </div>
  
        </MDBCol>
        {/* <MDBCol md="12">
          <div className="line-stepper"/>
          <div className="stepper d-flex justify-content-center">
            <div className="d-inline" >
              <div className={"circle-active-step"}>
                <img src={IconUserB} alt="User" className="img-fluid"/>
              </div>
              <div>
                <h1>Plan</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. Cras viverra est a est ornare dignissim. Suspendisse lobortis consectetur metus, sed viverra nisl porttitor ac. Proin a iaculis diam. Sed imperdiet libero magna, eget vulputate lacus iaculis et. Curabitur et nunc risus. Nam volutpat posuere erat, sit amet elementum lacus gravida ut. In odio ligula, mollis id leo et, fringilla placerat purus. Sed dignissim maximus dolor, at scelerisque nibh dapibus in. Nam scelerisque luctus quam. In malesuada, purus nec lacinia sodales, enim neque pulvinar ipsum, sit amet lacinia magna ligula quis mi. Fusce sodales enim non turpis efficitur condimentum. Donec in suscipit ipsum, sit amet interdum lacus. Integer purus velit, facilisis ac semper sit amet, pellentesque nec lectus.</p>
              </div>
            </div>
            <div className={"circle-step"}>
              <img src={IconCoaching} alt="User" className="img-fluid"/>
            </div>
            <div className="circle-step">
              <img src={IconCheck} alt="User" className="img-fluid pt-2"/>
            </div>
          </div>
        </MDBCol>
        <MDBCol md="10" className="pl-5 pr-5">
          
        </MDBCol> */}
      </MDBRow>
    </React.Fragment>
  );
}

export default StepperPlan;