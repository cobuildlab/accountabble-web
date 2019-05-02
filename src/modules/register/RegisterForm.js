import React from 'react';
import View from 'react-flux-state';
import StepperInformation from '../../components/StepperInformation';
import registerStore, { REGISTER_EVENT, REGISTER_ERROR } from './register-store';
import { registerAction } from './register-action';

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
    const { properties } = this.props;
    this.subscribe(registerStore, REGISTER_EVENT, () => {
      const { basicInformation: { email, name }, coaching: { category, frequency, weeks}, terms } = this.state;
      properties.history.push('/success', {
        authorized: true,
        message: {
          email,
          name,
          category,
          frequency,
          weeks,
          terms:  terms.newsletterStatus ? 'Authorized to received newsletter' : 'Declined newsletter'
        }
      });
    });

    this.subscribe(registerStore, REGISTER_ERROR, (err) => {
      console.log(err);
    });
  }

  handleStepperChange = (stepperName, state) => {
    this.setState({
      [stepperName]: state
    });
  };

  handleSubmit = () => {
    const { basicInformation, coaching: { category, frequency, weeks }, terms: { newsletterStatus } } = this.state;
    registerAction({
      basicInformation,
      coaching: {
        category,
        frequency,
        weeks: parseInt(weeks)
      },
      newsletterStatus
    });
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