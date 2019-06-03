import React from 'react';
import PropTypes from 'prop-types';

const TitlePrimary = ({ text }) => (
  <h1 className="title primary-text ">
    {text}
  </h1>
);

TitlePrimary.propTypes = {
  text: PropTypes.string.isRequired
};

export default TitlePrimary;