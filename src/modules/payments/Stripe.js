import React from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import PaymentForm from "./PaymentForm";

import { STRIPE_API_KEY } from "../../config";

const Stripe = ({ children }) => {
  return (
    <StripeProvider apiKey={STRIPE_API_KEY}>
      <React.Fragment>
        <Elements>
          {/** Dispatching the eventName */}
          <PaymentForm wrappedButton={children} />
        </Elements>
      </React.Fragment>
    </StripeProvider>
  );
};

export default React.memo(Stripe);
