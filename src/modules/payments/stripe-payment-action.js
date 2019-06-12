import Flux from "flux-state";
import firebase from "firebase";
import { GET_TOKEN_ACTION } from "../../stores/payment-store";
/**
 * @param {string} token
 */
export const paymentAction = async token => {
  let paymentRequest;
  const createPayment = firebase
    .functions()
    .httpsCallable("createPaymentRequest");
  try {
    paymentRequest = await createPayment({ token: token });
  } catch (err) {
    console.log(err);
  }
  console.log(paymentRequest.data);
};

export const createTokenAction = async (eventName, token) => {
  Flux.dispatchEvent(eventName, token);
};

export const sendTokenAction = ({ ...token }) => {
  setTimeout(() => {
    Flux.dispatchEvent(GET_TOKEN_ACTION, token);
  });
};
