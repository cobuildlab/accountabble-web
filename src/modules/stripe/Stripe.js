import React from "react";
import View from "react-flux-state";
import { Elements, StripeProvider } from "react-stripe-elements";
import { STRIPE_API_KEY } from "../../config/stripe-config";

class Stripe extends View {
  state = {};
  render() {
    return <StripeProvider />;
  }
}

export default Stripe;
