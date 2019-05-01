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
      frequency: 3,
      categories: [
        { name: 'Meditation', selected: true },
        { name: 'Sleep Exercise', selected: false },
        { name: 'Write/Read', selected: false },
        { name: 'Diet/Eat', selected: false },
        { name: 'Healthy', selected: false }
      ],
      weeks: '0'
    },
    terms: {
      newsletterStatus: false,
      agreeTerms: false
    },
  };

  handleStepperChange = (stepperName, state) => {
    this.setState({
      [stepperName]: state
    });
  };

  render() {
    const { basicInformation, coaching, terms } = this.state;
    return (
      <React.Fragment>
        <StepperInformation
          values={[ basicInformation, coaching, terms ]}
          onChange={this.handleStepperChange} 
          />
      </React.Fragment>
    );
  }
};

export default RegisterForm;