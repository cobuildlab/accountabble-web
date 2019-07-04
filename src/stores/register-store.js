import Flux from "flux-state";

export const REGISTER_EVENT = "REGISTER_EVENT";
export const REGISTER_ERROR = "REGISTER_ERROR";
export const REGISTER_EMAIL_ERROR = "REGISTER_EMAIL_ERROR";
export const REGISTER_GOOGLE_DRIVE_ERROR = "REGISTER_GOOGLE_DRIVE_ERROR"
class RegisterStore extends Flux.DashStore {
  constructor() {
    super();
    this.addEvent(REGISTER_EVENT);
    this.addEvent(REGISTER_ERROR);
    this.addEvent(REGISTER_EMAIL_ERROR);
    this.addEvent(REGISTER_GOOGLE_DRIVE_ERROR)
  }
}

const registerStore = new RegisterStore();

export default registerStore;
