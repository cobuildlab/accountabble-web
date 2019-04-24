import React from "react";
import { MDBRow, MDBCol } from 'mdbreact'

//image
import IconUser from '../assets/img/user.png'
import IconUserB from '../assets/img/user-b.png'
import IconCoaching from '../assets/img/Coaching-black.png'
import IconCheck from '../assets/img/check-black.png'

//component
import Step1 from '../components/step-1'
import Step2 from '../components/step-2'
import Step3 from '../components/step-3'

//css
import '../assets/scss/style.scss'


const StepperVertical = () => {
  const [step, setStep] = React.useState(0);
  const [status, setStatus] = React.useState([{ active: true }, { active: false }, { active: false }]);

  function calculateStep (stateFromStep) {
    switch(stateFromStep) {
      case 'next': return setStep(state => state + 1);
      case 'previous': return setStep(state => state - 1);
      default: return;
    }
  }

  function getStepperByIndex (steppers) {
    const stepper = steppers.findIndex((_, index) => index === step);
    return steppers[stepper];
  };

  return (
    <React.Fragment>
      <MDBRow>
        <MDBCol md="2">
          <div className="line-stepper"/>
          <div className="stepper d-flex justify-content-between">
            <div className={"circle-active-step"}>
              <img src={IconUserB} alt="User" className="img-fluid"/>
            </div>
            <div className={"circle-step"}>
              <img src={IconCoaching} alt="User" className="img-fluid"/>
            </div>
            <div className="circle-step">
              <img src={IconCheck} alt="User" className="img-fluid pt-2"/>
            </div>
          </div>
        </MDBCol>
        <MDBCol md="10" className="pl-5 pr-5">
          {getStepperByIndex([<Step1 onClick={calculateStep}/>, <Step2 onClick={calculateStep} />, <Step3 onClick={calculateStep} />])}
        </MDBCol>
      </MDBRow>
    </React.Fragment>
  );
}

export default StepperVertical;
// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import StepContent from '@material-ui/core/StepContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// import CollapseComponent from '../components/faq-collapse'

// const styles = theme => ({
//   root: {
//     width: '100%',
//     backgroundColor: 'transparent !important'
//   },
//   button: {
//     marginTop: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//   },
//   actionsContainer: {
//     marginBottom: theme.spacing.unit * 2,
//   },
//   resetContainer: {
//     padding: theme.spacing.unit * 3,
//     backgroundColor: 'transparent !important'
//   },
// });

// function getSteps() {
//   return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
// }

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <CollapseComponent/>;
//     case 1:
//       return 'An ad group contains one or more ads which target a shared set of keywords.';
//     case 2:
//       return `Try out different ad text to see what brings in the most customers,
//               and learn how to enhance your ads using features like ad extensions.
//               If you run into any problems with your ads, find out how to tell if
//               they're running and how to resolve approval issues.`;
//     default:
//       return 'Unknown step';
//   }
// }

// class VerticalLinearStepper extends React.Component {
//   state = {
//     activeStep: 0,
//   };

//   handleNext = () => {
//     this.setState(state => ({
//       activeStep: state.activeStep + 1,
//     }));
//   };

//   handleBack = () => {
//     this.setState(state => ({
//       activeStep: state.activeStep - 1,
//     }));
//   };

//   handleReset = () => {
//     this.setState({
//       activeStep: 0,
//     });
//   };

//   render() {
//     const { classes } = this.props;
//     const steps = getSteps();
//     const { activeStep } = this.state;

//     return (
//       <div className={classes.root}>
//         <Stepper color="primary" activeStep={activeStep} orientation="vertical">
//           {steps.map((label, index) => (
//             <Step key={label}>
//               <StepLabel>{label}</StepLabel>
//               <StepContent>
//                 <Typography>{getStepContent(index)}</Typography>
//                 <div className={classes.actionsContainer}>
//                   <div>
//                     <Button
//                       disabled={activeStep === 0}
//                       onClick={this.handleBack}
//                       className={classes.button}
//                     >
//                       Back
//                     </Button>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       onClick={this.handleNext}
//                       className={classes.button}
//                     >
//                       {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//                     </Button>
//                   </div>
//                 </div>
//               </StepContent>
//             </Step>
//           ))}
//         </Stepper>
//         {activeStep === steps.length && (
//           <div className={classes.resetContainer}>
//             <Typography>All steps completed - you&apos;re finished</Typography>
//             <Button onClick={this.handleReset} className={classes.button}>
//               Reset
//             </Button>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// VerticalLinearStepper.propTypes = {
//   classes: PropTypes.object,
// };

// export default withStyles(styles)(VerticalLinearStepper);