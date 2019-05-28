import React from 'react';

const BlogImage = ({  url }) => {
  return (
    <div className={'view'}> 
      <div className={'Ripple-parent image-source'} style={{backgroundImage: `url(${url})`}}>
      </div>
      <div className={'mask rgba-white-slight'}></div>
      <div className={'Ripple is-reppling imagex-'}></div>
    </div>
  );
};

export default BlogImage  ;