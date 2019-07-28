import flux from 'flux-state';
import {CONTACT_SENDED, CONTACT_ERROR} from './contactus-store';
import {validateContactForm} from '../../utils/validateForm'
import firebase from 'firebase/app'

/**
 * send contact email
 * @param data
 * @returns {Promise<void>}
 */
export const contactUsAction = async ({data}) => {
  try {
    validateContactForm(data)
  } catch (e) {
    return flux.dispatchEvent(CONTACT_ERROR, e)
  }
  // call cloud functions
  const sendEmailWithGmail = firebase.functions().httpsCallable("sendEmail");
  try {
    await sendEmailWithGmail({data})
  } catch (e) {
    return flux.dispatchEvent(CONTACT_ERROR, e)
  }

  return flux.dispatchEvent(CONTACT_SENDED, {})
};







