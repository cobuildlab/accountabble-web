import React from "react";
import Layout from "../../components/Layout";
import TitlePrimary from "../../components/TitlePrimary";
import CardComponent from "../../components/CardComponent";
import { addSubscriberToNewsletter } from "../mailchimp/mailchimp-actions";

/**
 * Appears after a submit of register.
 * @path '/sucess'
 */
const SuccessView = props => {
  const [info] = React.useState(props.location.state);
  React.useEffect(() => {
    if (info.authorized === undefined) window.location.href = "/";
    addSubscriberToNewsletter({ email: info.message.email });
  }, []);

  return (
    <Layout transition={true}>
      <div className="flex-column">
        <TitlePrimary text="Thanks for register!" />
        <CardComponent
          title="Register Information"
          description={
            <div>
              <div className="mt-3">
                {" "}
                <span className="primary-text">Name</span>:{" "}
                {info.message && info.message.name}{" "}
              </div>
              <div className="mt-3">
                {" "}
                <span className="primary-text">Email</span>:{" "}
                {info.message && info.message.email}{" "}
              </div>
              <div>
                <div className="mt-3">
                  {" "}
                  <span className="primary-text">Category</span>:{" "}
                  {info.message && info.message.category}{" "}
                </div>
                <div className="mt-3">
                  {" "}
                  <span className="primary-text">Frequency</span>:{" "}
                  {info.message && info.message.frequency}{" "}
                </div>
                <div className="mt-3">
                  {" "}
                  <span className="primary-text">Weeks</span>:{" "}
                  {info.message && info.message.weeks}{" "}
                </div>
                <div className="mt-3">
                  {" "}
                  <span className="primary-text">Terms</span>:{" "}
                  {info.message && info.message.terms}{" "}
                </div>
              </div>
            </div>
          }
        />
      </div>
    </Layout>
  );
};

export default SuccessView;
