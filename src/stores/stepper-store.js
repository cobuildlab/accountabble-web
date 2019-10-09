import Flux from 'flux-state';
import ImageStepOne from '../assets/img/person.png';

/**
 * @property {string} ON_CHANGE_STEP callbacks when a stepper on landing changes.
 * @property {[ title: string, description: string, stepText: string ]} stepsInformation the information of each step.
 */
export const ON_CHANGE_STEP = 'ON_CHANGE_STEP';

export const stepsInformation = [
  {
    title: 'Tell Us Who You Are',
    description: `We at ACCOUNTABBLE believe people have the capacity to learn, change, and achieve what they truly want.

    We believe in the the deep-seated potential we carry inside each of us.
    And our mission is to help people reach that potential and become their best self. Give us some basic information so we can start you in your journey.`,
    stepText: 'Accountabble probe that I can reach any goal that I set.',
    image: ImageStepOne
  },
  {
    title: 'Set Your Goal',
    description: `The way to access your potential is by choosing exciting goals that make you more productive and effective and sticking to them until they become part of who you are. Choose a goal you want to achieve or behavior you want acquire. Select how long you want to do this and set your commitment contract to keep your word.`,
    stepText: '95% of Goal Achievement.'
  },
  {
    title: 'Commit To Your Actualization',
    description: "To actualize is to make it real. Think of how far you can go if you simply follow what you promised yourself. With ACCOUNTABBLE, the self uncertainty gets left behind now.",
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
