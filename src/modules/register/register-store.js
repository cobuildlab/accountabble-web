import Flux from 'flux-state';

export const REGISTER_EVENT = 'REGISTER_EVENT';

class RegisterStore extends Flux.DashStore {
  constructor() {
    super();
    this.addEvent(REGISTER_EVENT);
  }
};

const registerStore = new RegisterStore();

export default registerStore;