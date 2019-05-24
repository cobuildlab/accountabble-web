import React from 'react';
import { PulseLoader } from 'react-spinners';
import { CSSTransition } from 'react-transition-group';

const RegisterSpinner = ({ status }) => (
  <div className="d-flex justify-content-center">
    <CSSTransition in={status} timeout={500} classNames="fade-in" unmountOnExit>
      <PulseLoader height={4} width={150} color={'#262626'} loading={status} />
    </CSSTransition>
  </div>
);

export default RegisterSpinner;