import Flux from 'flux-state';

export const STEP_1_INFO = 'STEP_1_INFO';
export const STEP_2_INFO = 'STEP_2_INFO';
export const STEP_3_INFO = 'STEP_3_INFO';

class StepperStore extends Flux.DashStore {
  constructor() {
    super();
    this.addEvent(STEP_1_INFO);
    this.addEvent(STEP_2_INFO);
    this.addEvent(STEP_3_INFO);
    Flux.dispatchEvent(STEP_1_INFO, {
      email: '',
      name: ''
    });
  }
};

const stepperStore = new StepperStore();

export default stepperStore;