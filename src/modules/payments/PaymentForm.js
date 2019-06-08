import React from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { sendTokenAction } from "./stripe-payment-action";

const PaymentForm = props => {
  async function submitToken(e) {
    e.preventDefault(e);
    let token;
    try {
      token = await props.stripe.createToken({ name: "name" });
    } catch (err) {
      console.log(err);
    }
    sendTokenAction(token);
  }

  return (
    <div className="checkout">
      <CardElement />
      <React.Fragment>
        <form onSubmit={submitToken}>{props.wrappedButton}</form>
      </React.Fragment>
    </div>
  );
};

export default injectStripe(PaymentForm);
