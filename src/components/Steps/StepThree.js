import React from "react";
import { MDBCol, MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";

/**
 * @modules
 */
import StepTitle from "./StepTitle";
import Stripe from "../../modules/payments/Stripe";

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

const StepThree = ({ onClick, onChange, value }) => {
  const [state] = React.useState(value);
  const [terms, setTerms] = React.useState({
    newsletterStatus: value.newsletterStatus,
    agreeTerms: value.agreeTerms
  });

  function onChangeValue(name, value) {
    onChange({ ...state, [name]: value });
  }

  function onChangeNumber(name, value) {
    const numberValues = value.split("");
    const chars = numberValues.filter(
      char => char.charCodeAt() >= 48 && char.charCodeAt() <= 57
    );
    onChange({ ...state, [name]: chars.join("") });
  }

  const onSetTerms = ({ target: { name } }) => {
    const term = terms[name];
    const newTerms = { ...terms, [name]: !term };
    setTerms(newTerms);
    onChange(newTerms);
  };

  return (
    <div className="animated fadeIn">
      <StepTitle message={"Credit Card"} />
      <div className="row">
        <p className="ml-3">Would you like to complete the purchase?</p>
        <MDBCol md="8">
          <Stripe onSubmit={data => console.log(data)}>
            <MDBBtn
              className="section-comment-btn-dark payment-button-right"
              disabled={!terms.agreeTerms}
              type="submit"
            >
              Finish
            </MDBBtn>
          </Stripe>
        </MDBCol>
        <MDBCol md="12">
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
            <label className="pure-material-checkbox">
              <input
                type="checkbox"
                name="newsletterStatus"
                onChange={onSetTerms}
                checked={terms.newsletterStatus}
              />
              <span>I want to receive newsletter</span>
            </label>
          </div>
        </MDBCol>
        <MDBCol md="12">
          <div className="d-flex justify-content-start mt-3">
            <img src={AmexImg} alt="card" className="mr-3" />
            <img src={VisaImg} alt="card" className="mr-3" />
            <img src={MasterCard} alt="card" />
          </div>
        </MDBCol>
      </div>
      <div className="text-right mt-2">
        <MDBBtn
          className="section-comment-btn-dark mr-3 payment-button-left"
          onClick={() => onClick("previous")}
        >
          Previous
        </MDBBtn>
      </div>
    </div>
  );
};

export default StepThree;
