import Flux from "flux-state";
import { ON_CHANGE_STEP } from "../stores/stepper-store";

const changeStepAction = stepInformation =>
  Flux.dispatchEvent(ON_CHANGE_STEP, stepInformation);

export { changeStepAction };
