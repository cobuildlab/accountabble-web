import {CardElement, injectStripe} from "react-stripe-elements";
import React from "react";

class PaymentForm extends React.Component {
  submitToken = () => {
    console.log('DEBUG: submitToken');
    this.props.stripe.createToken({name: "name"}).then(token => {
      this.props.onToken(token)
    });
  };

  render() {
    this.props._ref.submitToken = this.submitToken;
    return <CardElement/>;
  };
}

const InjectedPaymentForm = injectStripe(PaymentForm);
export {InjectedPaymentForm};
