import React from "react";
import { MDBBtn, MDBCollapse, MDBCardBody, MDBCard } from "mdbreact";
import {ic_keyboard_arrow_down} from 'react-icons-kit/md/ic_keyboard_arrow_down';
import { Icon } from 'react-icons-kit';
import PropTypes from 'prop-types';

const FrequentQuestion = ({ question, answer }) => {
  const [collapse, setCollapse] = React.useState('collapse');

  function toggleCollapse(collapseID) {
    setCollapse(prevState => prevState === '' ? collapseID : '');
  };

  return (
    <React.Fragment>
      <MDBBtn className="btn-block text-left m-0 btn-collapse" onClick={() => toggleCollapse('collapse')}>
        <Icon icon={ ic_keyboard_arrow_down } size="32" /> {question}
      </MDBBtn>
      <MDBCollapse id={"collapse"} isOpen={collapse}>
        <MDBCard className="card-collapse">
          <MDBCardBody className={`animated blue-text zoomIn ${collapse === '' && 'zoomOut'}`}>
            {answer}
          </MDBCardBody>
        </MDBCard>
      </MDBCollapse>
    </React.Fragment>
  );
};

FrequentQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
};

export default FrequentQuestion;