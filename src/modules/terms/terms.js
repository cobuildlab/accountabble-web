import React, { Component } from 'react';
import { MDBView, MDBMask, MDBRow, MDBContainer, MDBCol} from 'mdbreact'
import { Link } from 'react-router-dom'

import {Icon} from 'react-icons-kit'
import {thinLeft} from 'react-icons-kit/entypo/thinLeft'

//img
import BgHeader from '../../assets/img/bg/background-faq.png';

//css
import '../../assets/scss/style.scss';

//Components
import NavBar from '../../components/navbar';
import FooterComponent from '../../components/footer'




class Terms extends Component {
  
  render(){
    return(
    <>
      {/* navbar component */}
      <NavBar/>
        <div className="secction-view">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12">
                <h1 className="text-center text-white title-plan mb-5">
                <span className="text-white float-left">
                  <Link className="link-nav" to="/">
                    <Icon icon={ thinLeft } size="38" />
                  </Link>
                </span>
                Terms & Conditions
                </h1>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <p className="primary-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. Cras viverra est a est ornare dignissim. Suspendisse lobortis consectetur metus, sed viverra nisl porttitor ac. Proin a iaculis diam. Sed imperdiet libero magna, eget vulputate lacus iaculis et. Curabitur et nunc risus. Nam volutpat posuere erat, sit amet elementum lacus gravida ut. In odio ligula, mollis id leo et, fringilla placerat purus. Sed dignissim maximus dolor, at scelerisque nibh dapibus in. Nam scelerisque luctus quam. In malesuada, purus nec lacinia sodales, enim neque pulvinar ipsum, sit amet lacinia magna ligula quis mi. Fusce sodales enim non turpis efficitur condimentum. Donec in suscipit ipsum, sit amet interdum lacus. Integer purus velit, facilisis ac semper sit amet, pellentesque nec lectus.</p>
                <p className="primary-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. Cras viverra est a est ornare dignissim. Suspendisse lobortis consectetur metus, sed viverra nisl porttitor ac. Proin a iaculis diam. Sed imperdiet libero magna, eget vulputate lacus iaculis et. Curabitur et nunc risus. Nam volutpat posuere erat, sit amet elementum lacus gravida ut. In odio ligula, mollis id leo et, fringilla placerat purus. Sed dignissim maximus dolor, at scelerisque nibh dapibus in. Nam scelerisque luctus quam. In malesuada, purus nec lacinia sodales, enim neque pulvinar ipsum, sit amet lacinia magna ligula quis mi. Fusce sodales enim non turpis efficitur condimentum. Donec in suscipit ipsum, sit amet interdum lacus. Integer purus velit, facilisis ac semper sit amet, pellentesque nec lectus.</p>
                <p className="primary-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. Cras viverra est a est ornare dignissim. Suspendisse lobortis consectetur metus, sed viverra nisl porttitor ac. Proin a iaculis diam. Sed imperdiet libero magna, eget vulputate lacus iaculis et. Curabitur et nunc risus. Nam volutpat posuere erat, sit amet elementum lacus gravida ut. In odio ligula, mollis id leo et, fringilla placerat purus. Sed dignissim maximus dolor, at scelerisque nibh dapibus in. Nam scelerisque luctus quam. In malesuada, purus nec lacinia sodales, enim neque pulvinar ipsum, sit amet lacinia magna ligula quis mi. Fusce sodales enim non turpis efficitur condimentum. Donec in suscipit ipsum, sit amet interdum lacus. Integer purus velit, facilisis ac semper sit amet, pellentesque nec lectus.</p>
                <p className="primary-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. Cras viverra est a est ornare dignissim. Suspendisse lobortis consectetur metus, sed viverra nisl porttitor ac. Proin a iaculis diam. Sed imperdiet libero magna, eget vulputate lacus iaculis et. Curabitur et nunc risus. Nam volutpat posuere erat, sit amet elementum lacus gravida ut. In odio ligula, mollis id leo et, fringilla placerat purus. Sed dignissim maximus dolor, at scelerisque nibh dapibus in. Nam scelerisque luctus quam. In malesuada, purus nec lacinia sodales, enim neque pulvinar ipsum, sit amet lacinia magna ligula quis mi. Fusce sodales enim non turpis efficitur condimentum. Donec in suscipit ipsum, sit amet interdum lacus. Integer purus velit, facilisis ac semper sit amet, pellentesque nec lectus.</p>
                <p className="primary-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, risus vitae tincidunt volutpat, quam dolor dictum tortor, lacinia blandit arcu sem et neque. Pellentesque hendrerit vitae massa eu tincidunt. Cras viverra est a est ornare dignissim. Suspendisse lobortis consectetur metus, sed viverra nisl porttitor ac. Proin a iaculis diam. Sed imperdiet libero magna, eget vulputate lacus iaculis et. Curabitur et nunc risus. Nam volutpat posuere erat, sit amet elementum lacus gravida ut. In odio ligula, mollis id leo et, fringilla placerat purus. Sed dignissim maximus dolor, at scelerisque nibh dapibus in. Nam scelerisque luctus quam. In malesuada, purus nec lacinia sodales, enim neque pulvinar ipsum, sit amet lacinia magna ligula quis mi. Fusce sodales enim non turpis efficitur condimentum. Donec in suscipit ipsum, sit amet interdum lacus. Integer purus velit, facilisis ac semper sit amet, pellentesque nec lectus.</p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <FooterComponent/>
    </>
    );
  }

}
export default Terms;