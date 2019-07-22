import React from "react";
import {MDBCol, MDBBtn} from "mdbreact";
import {Link} from "react-router-dom";

/**
 * @modules
 */
import StepTitle from "./StepTitle";

/**
 * @css
 */
import "../../modules/payments/scss/payment.scss";

/**
 * @assets
 */
import AmexImg from "../../assets/img/amex.png";
import VisaImg from "../../assets/img/visa.png";
import MasterCard from "../../assets/img/mastercard.png";
import {Elements, StripeProvider} from "react-stripe-elements";
import {STRIPE_API_KEY} from "../../config";
import {InjectedPaymentForm} from "../../modules/payments/InjectedForm";
import RegisterSpinner from "../../modules/register/components/RegisterSpinner";

const StepThree = ({onClick, onChange, onError, value, isLoading, personalInformation}) => {
  let myRef = {};
  const [loading, setLoading] = React.useState(isLoading);
  const [terms, setTerms] = React.useState({
    agreeTerms: value.agreeTerms
  });

  const onSetTerms = ({target: {name}}) => {
    const term = terms[name];
    const newTerms = {...terms, [name]: !term};
    setTerms(newTerms);
    onChange(newTerms);
  };

  const submitToken = () => {
    myRef.submitToken(personalInformation);
    setLoading(true);
  };

  const onToken = (token) => {
    if (token.error) {
      onError(new Error(token.error));
      setLoading(false);
      return;
    }
    onClick('finish', token);
  };

  return (

    <StripeProvider apiKey={STRIPE_API_KEY}>
      <Elements>
        <div className="animated fadeIn">
          <StepTitle message={"Credit Card"}/>
          <div className="row">
            {/* <p className="ml-3">Would you like to complete the purchase?</p> */}
            <br/>
            <MDBCol md="8">
              <br/>
              <div className="checkout">
                <InjectedPaymentForm _ref={myRef} onToken={onToken}/>
              </div>
              <br/>
            </MDBCol>
            <MDBCol md="12">
              <br/>
              <div className="d-flex justify-content-start mt-3">
                <img src={AmexImg} alt="card" className="mr-3"/>
                <img src={VisaImg} alt="card" className="mr-3"/>
                <img src={MasterCard} alt="card"/>
              </div>
            </MDBCol>
            <MDBCol md="12">
              <br/>
              <div className="mt-4">
                <label className="pure-material-checkbox">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    onChange={onSetTerms}
                    checked={terms.agreeTerms}
                  />
                  <span>
                <Link to="/terms-and-conditions" className={"link-step-3"}>
                  I agree to the terms and conditions
                </Link>
              </span>
                </label>
              </div>
            </MDBCol>
          </div>
          <br/>
          <br/>
          {loading && <RegisterSpinner status={true}/>}
          <br/>
          <br/>
          <div className="text-right">
            <MDBBtn
              className="btn-step mr-3"
              onClick={() => onClick("previous")}
            >
              Previous
            </MDBBtn>
            <MDBBtn
              className="btn-step"
              disabled={!terms.agreeTerms}
              onClick={submitToken}
            >
              Finish
            </MDBBtn>
          </div>
        </div>
      </Elements>
    </StripeProvider>
  );
};

export default StepThree;
