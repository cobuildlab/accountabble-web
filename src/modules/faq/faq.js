import React, { Component } from 'react';

//Components
import NavBar from '../../components/navbar';

//css
import '../../assets/scss/style.scss';

class Faq extends Component {
  
  render(){
    return(
    <>
      {/* navbar component */}
      <NavBar/>
      <main>
        <h1 className="text-center"> FAQ</h1>
      </main>
    </>
    );
  }

}
export default Faq;