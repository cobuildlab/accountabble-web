import React from 'react';
import StepTitle from './StepTitle';
import { MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import AmexImg from '../../assets/img/amex.png';
import VisaImg from '../../assets/img/visa.png';
import MasterCard from '../../assets/img/mastercard.png';
import { Link } from 'react-router-dom';

const StepThree = ({ onClick, onChange, value }) => {
  const [state] = React.useState(value);
  const [terms, setTerms] = React.useState({ newsletterStatus: value.newsletterStatus, agreeTerms: value.agreeTerms });

  function onChangeValue (name, value) {
    onChange({...state, [name]: value });
  };

  function onChangeNumber(name, value) {
    const numberValues = value.split('');
    const chars = numberValues.filter(char => char.charCodeAt() >= 48 && char.charCodeAt() <= 57);
    onChange({...state, [name]: chars.join('') });
  };

  const onSetTerms = ({ target: { name }}) => {
    const term = terms[name];
    const newTerms = {...terms, [name]: !term };
    setTerms(newTerms);
    onChange(newTerms);
  };


  return (
    <div className="animated fadeIn">
      <StepTitle message={"Credit Card"} />
      <div className="row">
        <MDBCol md="8">
          <MDBInput 
            label="Credit Card Holder" 
            className="input-bg-blue animated fadeIn" 
            value={value.owner}
            onChange={({ target: { value } }) => onChangeValue('owner', value)} 
            />
        </MDBCol>
        <MDBCol md="4">
          <MDBInput 
            label="CVV" 
            className="input-bg-blue"  
            value={value.cvv} 
            onChange={({ target: { value }}) => onChangeNumber('cvv', value)} 
            />
        </MDBCol>
        <MDBCol md="12">
          <MDBInput 
            label="Card Number" 
            className="input-bg-blue animated fadeIn" 
            value={value.cardNumber} 
            onChange={({ target: { value }}) => onChangeNumber('cardNumber', value)} 
            />
        </MDBCol>
        <MDBCol md="6">
          <h6 className="title mt-4 mb-3">
            Expiration Date
          </h6>
          <DatePicker className="input-bg-blue input-date-picker" />
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
            <Link to="/terms-and-conditions" className={'link-step-3'}>
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
        <MDBBtn className="section-comment-btn-dark mr-3" onClick={() => onClick('previous')}>
          Previous
        </MDBBtn>
        <MDBBtn 
          className="section-comment-btn-dark" 
          onClick={() => onClick('next')}
          >
          Finish
        </MDBBtn>
      </div>
  </div>
  );
};

export default StepThree;
