import React from "react";
import View from "react-flux-state";
import StepperInformation from "../../components/StepperInformation";
import registerStore, {
  REGISTER_EVENT,
  REGISTER_ERROR
} from "../../stores/register-store";
import paymentStore, {
  GET_TOKEN_ACTION,
  GET_TOKEN_ERROR
} from "../../stores/payment-store";
// import { registerAction } from "./register-action";
import { StripeProvider } from "react-stripe-elements";
import { STRIPE_API_KEY } from "../../config";
import { paymentAction } from "../payments/stripe-payment-action";

class RegisterForm extends View {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      basicInformation: {
        email: "",
        name: ""
      },
      coaching: {
        category: "Mediation",
        frequency: 3,
        categories: [
          { name: "Sleep Better", selected: true },
          { name: "Mediate Regularly", selected: false },
          { name: "Exercise Regularly", selected: false },
          { name: "Eat Healthier", selected: false },
          { name: "Read/Write More", selected: false }
        ],
        weeks: "1"
      },
      terms: {
        newsletterStatus: false,
        agreeTerms: false
      },
      token: null
    };
  }

  componentDidMount() {
    console.log(STRIPE_API_KEY);
    const { history } = this.props;
    this.subscribe(registerStore, REGISTER_EVENT, () => {
      const {
        basicInformation: { email, name },
        coaching: { category, frequency, weeks },
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
      console.log(err);
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
    const { basicInformation, coaching, terms } = this.state;
    /**
     * @todo ADD ALL INFORMATION TO THE DATABASE
     */
    paymentAction(token);
  };

  render() {
    const { basicInformation, coaching, terms, isLoading } = this.state;
    return (
      <StripeProvider apiKey={STRIPE_API_KEY}>
        <StepperInformation
          values={[basicInformation, coaching, terms]}
          onChange={this.handleStepperChange}
          onSubmit={this.handleSubmit}
          loadingStepper={isLoading}
        />
      </StripeProvider>
    );
  }
}

export default RegisterForm;
