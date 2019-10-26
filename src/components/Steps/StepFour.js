import React from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdbreact';
import '../../assets/scss/style.scss';
import StepTitle from './StepTitle';
import RegisterSpinner from '../../modules/register/components/RegisterSpinner';

const StepFour = ({ onClick, onChange = function() {}, value, loadingForm }) => {
  const [terms, setTerms] = React.useState({
    newsletterStatus: value.newsletterStatus,
    agreeTerms: value.agreeTerms,
  });

  const onSetTerms = ({ target: { name } }) => {
    const term = terms[name];
    const newTerms = { ...terms, [name]: !term };
    setTerms(newTerms);
    onChange(newTerms);
  };

  return (
    <div className="animated fadeIn">
      <StepTitle message={'Finish'} />
      {/* Material unchecked */}
      <div className="mt-4 mb-5">
        <label className="pure-material-checkbox">
          <input
            type="checkbox"
            name="agreeTerms"
            onChange={onSetTerms}
            checked={terms.agreeTerms}
          />
          <span>
            <Link to="/terms-and-conditions" target="_blank" className={'link-step-3'}>
              I agree to the terms and conditions
            </Link>
          </span>
        </label>
        <h4 className="text-white title">2-Week Trial</h4>
        <span>$14.99 weekly. Charged monthly.</span>
      </div>
      <div className="text-right">
        <MDBBtn className="section-comment-btn-dark mr-3" onClick={() => onClick('previous')}>
          Previous
        </MDBBtn>
        <MDBBtn
          className="section-comment-btn-dark"
          onClick={() => onClick('next')}
          disabled={!terms.agreeTerms}>
          Next
        </MDBBtn>
        <div className="mt-3">
          <RegisterSpinner status={loadingForm} />
        </div>
      </div>
    </div>
  );
};

export default StepFour;
