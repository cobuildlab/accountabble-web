import React from 'react';
import PropTypes from 'prop-types';

const InputInfomration = ({ message, style }) => (
  <small className="message-information" style={style}>
    * {message}
  </small>
);

InputInfomration.propTypes = {
  message: PropTypes.string
};

export default InputInfomration;
