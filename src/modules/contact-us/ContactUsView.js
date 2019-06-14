import React from 'react';
import View from 'react-flux-state';
import Layout from '../../components/Layout';
import CardComponent from '../../components/CardComponent';
import FormContactUs from '../../components/FormContactUS'; 
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import contactUsStore,{ CONTACT_SENDED , CONTACT_ERROR } from './contactus-store';
import { contactusAction } from './contactus-action'





class ContactUsView extends View{

  componentDidMount(){

    this.subscribe(contactUsStore, CONTACT_SENDED,()=>{
      console.log('ok...... ');
    });

    this.subscribe(contactUsStore,CONTACT_ERROR,(err)=>{
      console.log(err);
    });

  };
  

  onContactUsSubmit = ({ comment, email, name }) => {

    contactusAction ( {email , name , comment} )  

  };

  render(){
    return(
    <Layout transition={true}>
      <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <h1 className="text-white title">Contact US</h1>
              <hr/>
              <p className="text-comment">
                Your growth is our #1 priority. We are here to provide more information, answer any question you may have and create an effective solution for your advancement.
              </p>
            </MDBCol>
            <MDBCol md='6'>
              <div className="flex-column">
                <CardComponent
                  title="Contact us"
                  description={
                    <FormContactUs onSubmit={this.onContactUsSubmit} />
                  }
                    />
                </div>
              </MDBCol>
          </MDBRow>     
      </MDBContainer>
    </Layout>
    );
  }

}

export default ContactUsView;
