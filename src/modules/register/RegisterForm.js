import React from 'react';
import View from 'react-flux-state';
import StepperInformation from '../../components/StepperInformation';

class RegisterForm extends View {
  state = {
    basicInformation: {
      email: '',
      name: ''
    },
    coaching: {
      category: '',
      frequency: ''
    },
    newsletterStatus: false,
    agreeTerms: false
  };

  handleChange = (currentStep, state) => {
    console.log(currentStep, state);
  };

  handleStepperChange = (stepperName, state) => {
    this.setState({
      [stepperName]: state
    });
  };

  render() {
    return (
      <React.Fragment>
        <StepperInformation onChange={this.handleStepperChange} />
      </React.Fragment>
    );
  }
};

export default RegisterForm;