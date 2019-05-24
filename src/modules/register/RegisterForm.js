import React from 'react';
import View from 'react-flux-state';
import StepperInformation from '../../components/StepperInformation';
import registerStore, { REGISTER_EVENT, REGISTER_ERROR } from './register-store';
import { registerAction } from './register-action';

class RegisterForm extends View {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      basicInformation: {
        email: '',
        name: ''
      },
      coaching: {
        category: 'Mediation',
        frequency: 3,
        categories: [
          { name: 'Sleep Better', selected: true },
          { name: 'Mediate Regularly', selected: false },
          { name: 'Exercise Regularly', selected: false },
          { name: 'Eat Healthier', selected: false },
          { name: 'Read/Write More', selected: false }
        ],
        weeks: '1'
      },
      terms: {
        newsletterStatus: false,
        agreeTerms: false
      },
      creditCard: {
        owner: '',
        cvv: '',
        cardNumber: '',
        expirationDate: {
          month: '',
          year: ''
        }
      }
    };
  }

  componentDidMount() {
    const { history } = this.props;
    this.subscribe(registerStore, REGISTER_EVENT, () => {
      const { basicInformation: { email, name }, coaching: { category, frequency, weeks}, terms } = this.state;
      history.push('/success', {
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
    this.setState({
      isLoading: true
    }, () => {
      registerAction({
        basicInformation,
        coaching: {
          category,
          frequency,
          weeks: parseInt(weeks)
        },
        newsletterStatus
      });
    })  
  };

  render() {
    const { basicInformation, coaching, terms, creditCard, isLoading } = this.state;
    return (
      <React.Fragment>
        <StepperInformation
          values={[ basicInformation, coaching, terms, creditCard ]}
          onChange={this.handleStepperChange}
          onSubmit={this.handleSubmit}
          loadingStepper={isLoading}
          />
      </React.Fragment>
    );
  }
};

export default RegisterForm;