import React, { Component } from "react";
import { MDBBtn, MDBCollapse, MDBCardBody, MDBCard } from "mdbreact";

import { Icon } from 'react-icons-kit'
import {ic_keyboard_arrow_down} from 'react-icons-kit/md/ic_keyboard_arrow_down'

class CollapseComponent extends Component {
state = {
  collapseID: ""
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));
}

render() {
  return (
      <>
        <MDBBtn className="btn-block text-left m-0 btn-collapse" onClick={this.toggleCollapse("basicCollapse")}>
        <Icon icon={ ic_keyboard_arrow_down } size="32" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </MDBBtn>
        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
        <MDBCard className="card-collapse">
          <MDBCardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life
            accusamus terry richardson ad squid. Nihil anim keffiyeh
            helvetica, craft beer labore wes anderson cred nesciunt sapiente
            ea proident.
          </MDBCardBody>
        </MDBCard>
        </MDBCollapse>
      </>
    );
  }
}

export default CollapseComponent;