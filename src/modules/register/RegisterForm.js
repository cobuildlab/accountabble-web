import React from 'react';
import View from 'react-flux-state';
import StepperInformation from '../../components/StepperInformation';
import registerStore, { REGISTER_EVENT } from './register-store';

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

  componentDidMount() {
    this.subscribe(registerStore, REGISTER_EVENT, (state) => {

    });
  }

  handleStepperChange = (stepperName, state) => {
    this.setState({
      [stepperName]: state
    });
  };

  handleSubmit = () => {
    window.alert('Submited!');
  };

  render() {
    const { basicInformation, coaching, terms } = this.state;
    return (
      <React.Fragment>
        <StepperInformation
          values={[ basicInformation, coaching, terms ]}
          onChange={this.handleStepperChange}
          onSubmit={this.handleSubmit} 
          />
      </React.Fragment>
    );
  }
};

export default RegisterForm;