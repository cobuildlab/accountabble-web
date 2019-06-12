import * as http from "../../utils/fetch";

export const addSubscriberToNewsletter = async ({ email }) => {
  const MAILCHIMP_API_MEMBERS_ENDPOINT = process.env.MAILCHIMP_API_AUDIENCE;

  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;

  const headers = new Headers();

  headers.append("Content-Type", "application/json");

  headers.append("Authorization", `Basic ${MAILCHIMP_API_KEY}`);

  try {
    await http.postRequest(
      `${MAILCHIMP_API_MEMBERS_ENDPOINT}`,
      {
        email_adress: email,
        status: "subscribed"
      },
      headers
    );
  } catch (err) {
    console.error(err);
  }
};
