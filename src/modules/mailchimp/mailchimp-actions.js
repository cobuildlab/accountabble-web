import firebase from "firebase/app";

export const addSubscriberToNewsletter = async ({ email }) => {
  const mailchimpRequest = firebase
    .functions()
    .httpsCallable("mailChimpService");
  let data;
  try {
    data = await mailchimpRequest({ email_address: email });
  } catch (err) {
    console.log(err);
  }
  console.log(data);
};
