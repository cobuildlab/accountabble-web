import React from 'react';

const Flex = ({children , alignItems , justifyContent})=>(  
 <div className={` d-flex ${ justifyContent ? ` justify-content-${ justifyContent } ` : ''} ${ alignItems ? ` align-items-${ alignItems } ` : ''} `}>{children}</div>
) 


  

export default Flex;