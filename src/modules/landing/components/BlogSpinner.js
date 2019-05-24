import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { BarLoader } from 'react-spinners';

const BlogSpinner = ({ status }) => (
  <div className="d-flex justify-content-center">
    <CSSTransition in={status} timeout={500} classNames="fade-in" unmountOnExit>
      <BarLoader height={4} width={150} color={'#262626'} loading={status} />
    </CSSTransition>
  </div>
 );

export default BlogSpinner;