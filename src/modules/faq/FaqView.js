import React from 'react';
import { MDBView, MDBMask, MDBRow, MDBContainer, MDBCol } from 'mdbreact';

//img
import BgHeader from '../../assets/img/bg/background-faq.png';

//css
import '../../assets/scss/style.scss';

//Components
import Navbar from '../../components/Navbar';
import FooterComponent from '../../components/FooterComponent';
import FrequentQuestion from '../../components/FrequentQuestion';
import RouteChangeContainer from '../../components/RouteChangeContainer';

const FaqView = ({ location: { pathname } }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <RouteChangeContainer>
      <Navbar />
      <MDBView className="about-bg-half-two" src={BgHeader}>
        <MDBMask className="d-flex justify-content-center align-items-center">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <h1 className="display-3 mb-0 pt-md-5 pt-5 font-weight-bold white-text">
                  <span>Frequently Asked</span>{' '}
                  <span className="primary-text font-weight-light">Questions</span>
                </h1>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>
      <main>
        <div className="section-faq">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <FrequentQuestion
                  question={'What is ACCOUNTABBLE?'}
                  answer={
                    "ACCOUNTABBLE is a personal accountability system that uses your environment and your smart phone to track your progress and keep you consistent on your area of interest. Set your goal, habit or target behavior and share files with our platform to prove you're executing on what you set out. Throughout the week you'll receive a report on your progress as well as a final report at the end of the week."
                  }
                />
              </MDBCol>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <FrequentQuestion
                  question={'What do I have to do?'}
                  answer={
                    "ACCOUNTABBLE sets up a rule for the goal or behavior you're working on. The rules are based on the vast research of behavioral economics and classical conditional as well as cognitive behavioral therapy. By doing the tasks on a consistent basis positive habits will form."
                  }
                />
              </MDBCol>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <FrequentQuestion
                  question={'How does it work?'}
                  answer={
                    'The way to keep track of what you’re doing is to take pictures, screenshots, make videos, and share them when you’re doing and how you’re doing it. Go to your GOOGLE DRIVE folder and read your RULES FILE. It is a simple few bullets note that make clear how to get what you want done. Throughout the week as you do those things document by uploading files to your folders as described in the RULES FILE. You’ll receive a report card throughout the week as well as a final report at the end of the week.'
                  }
                />
              </MDBCol>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <FrequentQuestion
                  question={'How much is it?'}
                  answer={
                    'ACCOUNTABBLE membership costs $14.99 per week. You’ll be charged on a monthly basis.'
                  }
                />
              </MDBCol>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <FrequentQuestion
                  question={'How do I cancel my membership?'}
                  answer={
                    'To cancel your membership simply write us a message on our contact us form. If you cancel a membership prior to the end of your contract you’ll recur a fee of half the amount of the total remaining balance. This is simply to ensure you’ll work on completing what you set out. Our mission is to help people become their best self.'
                  }
                />
              </MDBCol>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <FrequentQuestion
                  question={'How does the punishment work?'}
                  answer={
                    'Upon not completing what you chose to do, and not being able to provide a reasonable justification, you’ll receive an objective report and a charge will incur on the weekly amount you set for your contract.'
                  }
                />
              </MDBCol>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <FrequentQuestion
                  question={'What if I can’t reasonably do what I set out?'}
                  answer={
                    "Our reporting on your actions are based on solidarity and reason. The rule of thumb is to use one's best judgement. You can dispute the judgement to defer it up to 2 days after the report is sent. But be careful about being straightforward with our platform and yourself. You are playing with something much more important than money - your motivation and self esteem. By not paying what you set out when you fail, you will be learning to not be accountable, which defeats the whole point of using ACCOUNTABBLE."
                  }
                />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <FooterComponent />
      </main>
    </RouteChangeContainer>
  );
};
export default FaqView;
