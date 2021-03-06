import React from 'react';
import { MDBInput, MDBBtn } from 'mdbreact';
import { validateName, validateEmail, isEmpty } from '../../utils/regexp';
import InputInfomration from '../InputInformation';
import '../../assets/scss/style.scss';
import StepTitle from './StepTitle';

const StepOne = ({ onClick, onChange, data }) => {
  const [state, setState] = React.useState(data);
  const [errors, setErrors] = React.useState({ name: false, email: false });

  /**
   * @function onChangeBasicInformation
   * @type {Event} controls the state internally of the input.
   * And send it to the parent component when @function onClick is called.
   */
  const onChangeBasicInformation = (value, name) => {
    onChange({ ...state, [name]: value });
    setState((prevState) => ({ ...prevState, [name]: value }));
    if (name === 'name') {
      const inputExpression = !(validateName(value) || isEmpty(value));
      setErrors((prevState) => ({ ...prevState, [name]: inputExpression }));
    }
    if (name === 'email') {
      const inputExpression = !(!validateEmail(value) || isEmpty(value));
      setErrors((prevState) => ({ ...prevState, [name]: inputExpression }));
    }
  };

  const onStepChange = () => {
    onClick('next');
  };

  const validInputExpressionName = (expression) => {
    return expression ? 'input-bg-blue' : 'input-bg-blue-invalid';
  };

  const validInputExpressionEmail = (expression) => {
    return expression ? 'input-bg-blue' : 'input-bg-blue-invalid';
  };

  const shouldStepIf = !errors.name && !errors.email && (state.name !== '' && state.email !== '');
  return (
    <div>
      <StepTitle message={'Basic Information'} />
      <MDBInput
        className={validInputExpressionName(validateName(state.name) || isEmpty(state.name))}
        label="Name"
        name="name"
        value={state.name}
        onChange={({ target: { value } }) => onChangeBasicInformation(value, 'name')}
      />
      {errors.name && <InputInfomration message={'Name should contain only characters'} />}
      <MDBInput
        className={validInputExpressionEmail(!validateEmail(state.email) || isEmpty(state.email))}
        name="email"
        label="Email"
        value={state.email}
        onChange={({ target: { value } }) => onChangeBasicInformation(value, 'email')}
      />
      <MDBInput
        label="Phone"
        name="phone"
        value={state.phone}
        onChange={({ target: { value } }) => onChangeBasicInformation(value, 'phone')}
      />
      {errors.email && <InputInfomration message={'Email should be valid'} />}
      <div className="d-flex justify-content-end">
        <MDBBtn className="section-comment-btn-dark" onClick={shouldStepIf ? onStepChange : null}>
          Next
        </MDBBtn>
      </div>
    </div>
  );
};

export default StepOne;
