import React from 'react';
import PropTypes from 'prop-types';

const StepTitle = ({ message }) => (
  <h1 className="title text-left text-weight-bold mt-4">{message}</h1>
);

StepTitle.propTypes = {
  message: PropTypes.string.isRequired 
};

export default StepTitle;