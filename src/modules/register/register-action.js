import firebase from "firebase/app";
import Flux from "flux-state";
import {
  REGISTER_ERROR,
  REGISTER_EVENT,
  REGISTER_EMAIL_ERROR,
  REGISTER_GOOGLE_DRIVE_ERROR
} from "../../stores/register-store";

/**
 *
 * @param basicInformation
 * @param coaching
 * @param token
 * @returns {Promise<firebase.functions.HttpsCallableResult>}
 */
export const registerAction = async ({basicInformation, coaching, token ,active}) => {
  const functions = firebase.functions();
  const createPaymentRequest = functions.httpsCallable('mainFunction');
 
  
  let code 
  try {
    code = await createPaymentRequest({basicInformation , coaching , token ,active });
  } catch (e) {
    Flux.dispatchEvent(REGISTER_ERROR, e);
    throw e;
  }

  Flux.dispatchEvent(REGISTER_EVENT, code);
  return code;
};

