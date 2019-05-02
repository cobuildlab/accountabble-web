import React from 'react';

const classes = {
  about: 'section-about-us',
  description: 'section-about-description',
  comment: 'section-comment'
};

export const SectionAboutUS = ({ children }) => (
  <div className={classes.about}>
    {children}
  </div>
);

export const SectionAboutUSDescription = ({ children }) => (
  <div className={classes.description}>
    {children}
  </div>
);

export const SectionCommentComponent = ({ children }) => (
  <div className={classes.comment}>
    {children}
  </div>
);