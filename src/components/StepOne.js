import React from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import '../assets/scss/style.scss';

const StepOne = ({ onClick, onChange, value }) => {
  const [state, setState] = React.useState(value);
  
  /**
   * @function onChangeBasicInformation
   * @type {Event} controls the state internally of the input.
   * And send it to the parent component when @function onClick is called.
   */
  const onChangeBasicInformation = (value, name) => {
    onChange({...state, [name]: value });
    setState(prevState => ({...prevState, [name]: value }));    
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
        onChange={({ target: { value }}) => onChangeBasicInformation(value, 'name')}
      />
      <MDBInput 
        className="input-bg-blue" 
        label="Email" 
        value={state.email} 
        onChange={({ target: { value }}) => onChangeBasicInformation(value, 'email')} 
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