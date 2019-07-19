import React from "react";
import View from "react-flux-state";
import StepperInformation from "../../components/StepperInformation";
import registerStore, {
  REGISTER_EVENT,
  REGISTER_ERROR
} from "../../stores/register-store";
import paymentStore, {GET_TOKEN_ACTION} from "../../stores/payment-store";
import {toast} from 'react-toastify';
import {registerAction} from "./register-action";

class RegisterForm extends View {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      basicInformation: {
        email: "",
        name: "",
      },
      active:true,
      coaching: {
        category: "Mediation",
        frequency: 3,
        categories: [
          {name: "Sleep Better", selected: true},
          {name: "Mediate Regularly", selected: false},
          {name: "Exercise Regularly", selected: false},
          {name: "Eat Healthier", selected: false},
          {name: "Read/Write More", selected: false}
        ],
        weeks: "1"
      },
      terms: {
        agreeTerms: false
      },
      token: null
    };
  }

  componentDidMount() {
    const {history} = this.props;
    this.subscribe(registerStore, REGISTER_EVENT, (code) => {
      console.log(`REGISTER_EVENT`, code);
      const {
        basicInformation: {email, name},
        coaching: {category, frequency, weeks},
        terms
      } = this.state;
      history.push("/success", {
        authorized: true,
        message: {
          email,
          name,
          category,
          frequency,
          weeks,
          terms: terms.newsletterStatus
            ? "Authorized to received newsletter"
            : "Declined newsletter"
        }
      });
    });

    this.subscribe(paymentStore, GET_TOKEN_ACTION, token => {
      this.handleSubmit(token);
    });

    this.subscribe(registerStore, REGISTER_ERROR, err => {
      toast.error(err.message);
      this.setState({isLoading: false});
    });
  }

  /**
   * @param {string} stepperName
   * @paran {object} sta
   */
  handleStepperChange = (stepperName, state) => {
    this.setState({
      [stepperName]: state
    });
  };

  /**
   * @param {string} token
   */
  handleSubmit = async token => {
    const {basicInformation, coaching: {category, frequency, weeks},active} = this.state;
    const coaching = {category, frequency, weeks};
    this.setState({isLoading: true}, () => {
      registerAction({basicInformation, coaching, token , active});
    });
  };

  onError = (e) => toast.error(e.message);

  render() {
    const {basicInformation, coaching, terms, isLoading} = this.state;
    return (
      <StepperInformation
        values={[basicInformation, coaching, terms]}
        onChange={this.handleStepperChange}
        onSubmit={this.handleSubmit}
        onError={this.onError}
        isLoading={isLoading}
      />
    );
  }
}

export default RegisterForm;
