import React from 'react';
import PropTypes from 'prop-types';

const TextPrimary = ({ tag, children }) => {
    const className = 'blue-text'
    if (tag === 'h1') return <h1 className={className}>{children}</h1>
    if (tag === 'h2') return <h2 className={className}>{children}</h2>
    if (tag === 'h3') return <h3 className={className}>{children}</h3>
    if (tag === 'strong') return <strong className={className}>{children}</strong>
    if (tag === 'span') return <span className={className}>{children}</span>
    if (tag === 'p') return <p className={className}>{children}</p>
    if (tag === 'small') return <small className={className}>{children}</small>
};

TextPrimary.propTypes = {
    tag: PropTypes.string.isRequired,
    children: PropTypes.any 
};

export default TextPrimary;