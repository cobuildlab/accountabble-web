import Flux from 'flux-state';

export const REGISTER_EVENT = 'REGISTER_EVENT';
export const REGISTER_ERROR = 'REGISTER_ERROR';
class RegisterStore extends Flux.DashStore {
  constructor() {
    super();
    this.addEvent(REGISTER_EVENT);
    this.addEvent(REGISTER_ERROR);
  }
};

const registerStore = new RegisterStore();

export default registerStore;