import React from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

const PaymentForm = () => {
  return (
    <div className="checkout">
      <CardElement />
    </div>
  );
};

export default injectStripe(PaymentForm);
