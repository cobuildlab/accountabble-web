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
  console.log(`DEBUG:`, info);
  return (
    <Layout transition={true}>
      <div className="flex-column">
        <TitlePrimary text="Thanks for register!" />
        <p className={'white-text'}>Welcome to the community.</p>
        <span className={'white-text'}>Check your e-mail please, and let the journey begin.</span>
        {info.message && (
          <CardComponent
            title="Register Information"
            description={
              <div>
                <div className="mt-3">
                  {' '}
                  <span className="primary-text">Name</span>: {info.message.name}{' '}
                </div>
                <div className="mt-3">
                  {' '}
                  <span className="primary-text">Email</span>: {info.message.email}{' '}
                </div>
                <div className="mt-3">
                  {' '}
                  <span className="primary-text">Phone</span>: {info.message.phone}{' '}
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
                    <span className="primary-text">Weeks</span>:{' '}
                    {info.message && info.message.weeks}{' '}
                  </div>
                  <div className="mt-3">
                    {' '}
                    <span className="primary-text">Bet</span>:{' '}
                    {info.message.bet && info.message.bet.label}{' '}
                  </div>
                  <div className="mt-3">
                    {' '}
                    <span className="primary-text">Terms</span>:{' '}
                    {info.message && info.message.terms}{' '}
                  </div>
                </div>
              </div>
            }
          />
        )}
      </div>
    </Layout>
  );
};

export default SuccessView;
