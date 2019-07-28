import React from 'react';
import View from 'react-flux-state';
import Layout from '../../components/Layout';
import CardComponent from '../../components/CardComponent';
import FormContactUs from '../../components/FormContactUS';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import contactUsStore, {CONTACT_SENDED, CONTACT_ERROR} from './contactus-store';
import {contactUsAction} from './contact-us-action'
import RegisterSpinner from '../register/components/RegisterSpinner'
import '../../assets/scss/style.scss'
import {toast} from 'react-toastify'


class ContactUsView extends View {

  state = {loading: false};

  componentDidMount() {

    this.subscribe(contactUsStore, CONTACT_SENDED, () => {
      toast.info('Message successfully sent!');
      setTimeout(() => {
        this.props.history.push("/")
      }, 5000)
    });

    this.subscribe(contactUsStore, CONTACT_ERROR, (err) => {
      this.setState({loading: false}, () => {
        toast.info(err.message);
      })
    });

  };

  onContactUsSubmit = ({comment, email, name, phone}) => {
    const data = {
      name,
      email,
      comment,
      phone,
    };
    this.setState({loading: true}, () => {
      contactUsAction({data})
    })
  };

  render() {
    const {loading} = this.state
    return (
      <Layout transition={true}>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <h1 className="text-white title">Contact US</h1>
              <hr/>
              <p className="text-comment">
                Your growth is our #1 priority. We are here to provide more information, answer any question you may
                have and create an effective solution for your advancement.
              </p>
            </MDBCol>
            <MDBCol md='6'>
              <div className="flex-column">
                <CardComponent
                  title="Contact us"
                  description={
                    <div>
                      <FormContactUs onSubmit={this.onContactUsSubmit}/>
                      <RegisterSpinner className="center-spinner" status={loading} color={'#5ECAEE'}/>
                    </div>
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
