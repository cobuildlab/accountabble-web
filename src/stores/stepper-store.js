import Flux from 'flux-state';

/**
 * @property {string} ON_CHANGE_STEP callbacks when a stepper on landing changes.
 * @property {[ title: string, description: string ]} stepsInformation the information of each step.
 */
export const ON_CHANGE_STEP = 'ON_CHANGE_STEP';


export const stepsInformation = [
  {
    title: 'Accountabble Mission',
    description: `We at ACCOUNTABBLE  believe that humans have the capacity to easily develop change and become superheroes. 
    We believe humans have a deep seated potential locked inside the way we live our lives and that we can get access to it if we look for it.`,
    stepText: 'Accountabble probe that I can reach any goal that I set.'
  },
  {
    title: 'Your Jorney',
    description: `The way to access your potential is by choosing goals that make you more productive and effective and sticking to them until they become a habit. Choose a goal you want to achieve or behavior you want to start doing or stop doing. Select how long you want to do this and set the amount you will pay if you don’t keep your word.  (Please change the title to "Goal" rather than "Coaching". You can take out the word "category". Simply Goal then under simply "Frequency" then "Weeks" and there's another one missing which is the "Bet" which for now it will only be a set amount of $25.`,
    stepText: '95% of Goal Achievement.'
  },
  {
    title: 'Actualization',
    description: "As you share your actions with ACCOUNTABBLE by sharing pictures or videos through our platform, one of our coaches will check up on you by looking at those files.",
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