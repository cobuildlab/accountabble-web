import Flux from 'flux-state';
import ImageStepOne from '../assets/img/person.png';

/**
 * @property {string} ON_CHANGE_STEP callbacks when a stepper on landing changes.
 * @property {[ title: string, description: string, stepText: string ]} stepsInformation the information of each step.
 */
export const ON_CHANGE_STEP = 'ON_CHANGE_STEP';

export const stepsInformation = [
  {
    title: 'Accountabble Mission',
    description: `We at ACCOUNTABBLE  believe that people have the capacity to develop change and become self-actualized. 
    We believe in the potential inside each of us that we can get access if we seek it.`,
    stepText: 'Accountabble probe that I can reach any goal that I set.',
    image: ImageStepOne
  },
  {
    title: 'Your Journey',
    description: `The way to access your potential is by choosing goals that make you more productive and effective and sticking to them until they become part of who you are. Choose a goal you want to achieve or behavior you want acquire. Select how long you want to do this and set your commitment contract to keep your word.`,
    stepText: '95% of Goal Achievement.'
  },
  {
    title: 'Actualization',
    description: "As you share your actions with ACCOUNTABBLE by sharing pictures or videos, one of our coaches will check up on you by looking at those files, and report to the platform on a weekly basis.",
    stepText: 'The First Step to become your better Self.'
  },
];

class StepperStore extends Flux.DashStore {
  constructor() {
    super();
    this.addEvent(ON_CHANGE_STEP);
  }
};

const stepperStore = new StepperStore();

export default stepperStore;
