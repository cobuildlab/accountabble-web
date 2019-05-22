import React from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
import PropTypes from 'prop-types';
import '../assets/scss/style.scss'
import { parseStringIntoDOM, getSourceAttribute, getPreviewText } from  '../utils/parser';
import $ from 'cheerio';

const CardBlogLarge = ({ blogTtile, content, author, published }) => {
  const div = parseStringIntoDOM(content).html('div');
  const text = getPreviewText('div', div);
  const anchor  = parseStringIntoDOM(content).html('a');
  const src = getSourceAttribute('a', anchor);

  function getImageOrDefault() {
    return src === null ? "https://mdbootstrap.com/img/Photos/Others/images/43.jpg" : src;
  };
  return (
    <React.Fragment>
      <MDBCard className="section-blog-card mb-4">
      <MDBCardImage className="img-fluid" src={getImageOrDefault()} waves />
        <MDBCardBody>
          <MDBCardTitle>{blogTtile}</MDBCardTitle>
          <MDBCardText>
            {text}
          </MDBCardText>
          <MDBCardText>
            <small>author: </small>
            <small className="white-text">
              {author}
            </small><br />
            <small>published: </small>
            <small className="white-text">
              {new Date(published).toDateString()}
            </small>
          </MDBCardText>
          <MDBBtn href="#" className="section-blog-btn-blue">Read this post</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </React.Fragment>
  );
};

CardBlogLarge.propTypes = {
  blogTtile: PropTypes.string
};


export default CardBlogLarge;