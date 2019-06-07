import Flux from "flux-state";

export const GET_TOKEN_ACTION = "GET_TOKEN_ACTION";
export const GET_TOKEN_ERROR = "GET_TOKEN_ERROR";

class PaymentStore extends Flux.DashStore {
  constructor() {
    super();
    this.addEvent(GET_TOKEN_ACTION);
    this.addEvent(GET_TOKEN_ERROR);
  }
}

const paymentStore = new PaymentStore();

export default paymentStore;
