import React from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import { STRIPE_API_KEY } from "../../config";
import View from "react-flux-state";
import PaymentForm from "./PaymentForm";

class Stripe extends View {
  state = {
    paymentStatus: false
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <StripeProvider apiKey={STRIPE_API_KEY}>
        <Elements>
          <PaymentForm onSubmit={this.onSubmit} />
        </Elements>
      </StripeProvider>
    );
  }
}

export default Stripe;
