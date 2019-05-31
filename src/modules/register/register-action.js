import firebase from "firebase";
import Flux from "flux-state";
import {
  REGISTER_ERROR,
  REGISTER_EVENT,
  REGISTER_EMAIL_ERROR
} from "./register-store";

export const registerAction = async userData => {
  const email = userData.basicInformation.email;
  const database = firebase.firestore();
  try {
    await database
      .collection("users")
      .doc(email)
      .set(userData, { merge: true });
  } catch (err) {
    return Flux.dispatchEvent(REGISTER_ERROR, err);
  }
  return Flux.dispatchEvent(REGISTER_EVENT, null);
};

export const checkEmailExistenceAction = async email => {
  // console.log(email);
  const database = firebase.firestore();
  const userColletion = database.collection("users");
  const userRef = await userColletion.doc(email).get();
  const exist = userRef.exists;
  if (exist === true)
    return Flux.dispatchEvent(
      REGISTER_EMAIL_ERROR,
      new Error("Email already taken")
    );
  return;
};
