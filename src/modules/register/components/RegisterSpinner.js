import React from 'react';
import { PulseLoader } from 'react-spinners';
import { CSSTransition } from 'react-transition-group';

const RegisterSpinner = ({ status , color , className }) => (
  <div className={"d-flex justify-content-center "+ className} >
    <CSSTransition in={status} timeout={500} classNames="fade-in" unmountOnExit>
      <PulseLoader height={4} width={150} color={color} loading={status} />
    </CSSTransition>
  </div>
);

export default RegisterSpinner;