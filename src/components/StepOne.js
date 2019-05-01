import React from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import '../assets/scss/style.scss';
import stepperStore, { STEP_1_INFO } from './stepperStore';

const StepOne = ({ onClick, onChange, value }) => {
  console.log(value);
  const [state, setState] = React.useState(value);
  /**
   * @function onChangeBasicInformation
   * @type {Event} controls the state internally of the input.
   * And send it to the parent component when @function onClick is called.
   */
  const onChangeBasicInformation = ({ target: { value }}, name) => {
    setState(prevState => ({...prevState, [name]: value }));
    onChange({...state});
  };  

  const onStepChange = () => {
    onClick('next');
  };

  return (
    <React.Fragment>
      <h1 className="title text-left text-weight-bold mt-4">
        Basic Information
      </h1>
      <MDBInput 
        className="input-bg-blue" 
        label="Name" 
        value={state.name} 
        onChange={(e) => onChangeBasicInformation(e, 'name')}
      />
      <MDBInput 
        className="input-bg-blue" 
        label="Email" 
        value={state.email} 
        onChange={(e) => onChangeBasicInformation(e, 'email')} 
      />
      <div className="text-right">
        <MDBBtn 
          className="section-comment-btn-dark" 
          onClick={onStepChange} 
          disabled={state.name === '' || state.email === ''}
          >
          Next
        </MDBBtn>
      </div>
    </React.Fragment>
  );
}

export default StepOne;