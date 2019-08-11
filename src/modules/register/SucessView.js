import React from 'react';
import Layout from '../../components/Layout';
import TitlePrimary from '../../components/TitlePrimary';
import CardComponent from '../../components/CardComponent';

/**
 * Appears after a submit of register.
 * @path '/success'
 */
const SuccessView = (props) => {
  const [info] = React.useState(props.location.state);

  return (
    <Layout transition={true}>
      <div className="flex-column">
        <TitlePrimary text="Thanks for register!" />
        <p>Welcome to the community.</p>
        <span>Check your e-mail please, and let the journey begin.</span>
        <CardComponent
          title="Register Information"
          description={
            <div>
              <div className="mt-3">
                {' '}
                <span className="primary-text">Name</span>: {info.message && info.message.name}{' '}
              </div>
              <div className="mt-3">
                {' '}
                <span className="primary-text">Email</span>: {info.message && info.message.email}{' '}
              </div>
              <div className="mt-3">
                {' '}
                <span className="primary-text">Phone</span>: {info.message && info.message.phone}{' '}
              </div>
              <div>
                <div className="mt-3">
                  {' '}
                  <span className="primary-text">Category</span>:{' '}
                  {info.message && info.message.category}{' '}
                </div>
                <div className="mt-3">
                  {' '}
                  <span className="primary-text">Frequency</span>:{' '}
                  {info.message && info.message.frequency}{' '}
                </div>
                <div className="mt-3">
                  {' '}
                  <span className="primary-text">Weeks</span>: {info.message && info.message.weeks}{' '}
                </div>
                <div className="mt-3">
                  {' '}
                  <span className="primary-text">Bet</span>: {info.message && info.message.bet}{' '}
                </div>
                <div className="mt-3">
                  {' '}
                  <span className="primary-text">Terms</span>: {info.message && info.message.terms}{' '}
                </div>
              </div>
            </div>
          }
        />
      </div>
    </Layout>
  );
};

export default SuccessView;
