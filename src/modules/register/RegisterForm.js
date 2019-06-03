import React from "react";
import View from "react-flux-state";
import StepperInformation from "../../components/StepperInformation";
import registerStore, {
  REGISTER_EVENT,
  REGISTER_ERROR
} from "../../stores/register-store";
import { registerAction } from "./register-action";
import { StripeProvider } from "react-stripe-elements";
import { STRIPE_API_KEY } from "../../config";

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
      creditCard: {
        owner: "",
        cvv: "",
        cardNumber: "",
        expirationDate: {
          month: "",
          year: ""
        }
      }
    };
  }

  componentDidMount() {
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

    this.subscribe(registerStore, REGISTER_ERROR, err => {
      console.log(err);
    });
  }

  handleStepperChange = (stepperName, state) => {
    this.setState({
      [stepperName]: state
    });
  };

  handleSubmit = async () => {
    const { basicInformation, coaching, terms } = this.state;
    const { token } = await this.props.createToken({
      name: basicInformation.name
    });
    registerAction(
      {
        basicInformation,
        coaching: {
          category: coaching.category,
          frequency: coaching.frequency,
          weeks: parseInt(terms.weeks)
        },
        newsletterStatus: terms.newsletterStatus
      },
      token
    );
    this.setState({
      isLoading: true
    });
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
