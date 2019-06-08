import React from "react";

const classes = {
  about: "section-about-us",
  description: "section-about-description",
  comment: "section-comment",
  plan: "secction-plan",
  information: "section-information",
  blog: "section-blog"
};

export const SectionAboutUS = ({ children }) => (
  <div className={classes.about}>{children}</div>
);

export const SectionAboutUSDescription = ({ children }) => (
  <div className={classes.description}>{children}</div>
);

export const SectionCommentComponent = ({ children }) => (
  <div className={classes.comment}>{children}</div>
);

export const SectionPlan = ({ children }) => (
  <div className={classes.plan}>{children}</div>
);

export const SectionInformation = ({ children }) => (
  <div className={classes.information}>{children}</div>
);

export const SectionBlog = ({ id, children }) => (
  <div id={id} className={classes.blog}>
    {children}
  </div>
);
