import {CardElement, injectStripe} from "react-stripe-elements";
import React from "react";

class PaymentForm extends React.Component {
  submitToken = ({name}) => {
    // this.props.stripe.createSource({
    //   type: 'card',
    //   usage: 'reusable',
    //   currency: 'usd',
    //   owner: {
    //     name
    //   },
    // }).then(source => {
    //   console.log('DEBUG: source:', source);
    //   this.props.onToken(source, email);
    // });
    this.props.stripe.createToken({name}).then(token => {
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
