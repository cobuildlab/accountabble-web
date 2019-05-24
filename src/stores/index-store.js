import Flux from 'flux-state';

/**
 * @description
 * Handles all event of information like, services, redirect through contact us.
 */

export const CONTACT_US_CALLBACK = 'CONTACT_US_CALLBACK';
export const CONTACT_US_ERROR = 'CONTACT_US_ERROR';

class IndexStore extends Flux.DashStore {
  constructor() {
    super();
    this.addEvent(CONTACT_US_CALLBACK);
    this.addEvent(CONTACT_US_ERROR);
  }  
};

const indexStore = new IndexStore();

export default indexStore;