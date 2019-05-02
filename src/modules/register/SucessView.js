import React from 'react';
import Layout from '../../components/Layout';
import { MDBView, MDBContainer } from 'mdbreact';
import BgHeader from '../../assets/img/bg/background-AboutUS.png';
import TitlePrimary from '../../components/TitlePrimary';
import CardComponent from '../../components/CardComponent';



/**
 * Appears after a submit of register.
 * @path '/sucess'
 */
const SuccessView = (props) => {
  const [info] = React.useState(props.location.state);
  React.useEffect(() => {
    if(info.authorized === undefined) window.location.href = '/';
  }, []);

  return (
    <Layout transition={true}>
      <div className="flex-column">
        <TitlePrimary text="Thanks for register!" />
        <CardComponent
          title="Register Information"
          description={
            <div>
              <p> <span className="primary-text">Name</span>: {info.message && info.message.name} </p>
              <p> <span className="primary-text">Email</span>: {info.message && info.message.email} </p>
              <div>
                <p> <span className="primary-text">Category</span>: {info.message && info.message.category} </p>
                <p> <span className="primary-text">Frequency</span>: {info.message && info.message.frequency} </p>
                <p> <span className="primary-text">Weeks</span>: {info.message && info.message.weeks} </p>
                <p> <span className="primary-text">Terms</span>: {info.message &&  info.message.terms} </p>
              </div>
            </div>
          }
        />
      </div>
    </Layout>
  );
};

export default SuccessView;