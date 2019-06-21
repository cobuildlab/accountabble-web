import flux from 'flux-state';
import { CONTACT_SENDED , CONTACT_ERROR } from './contactus-store';
import { validateContactForm } from  '../../utils/validateForm'
import firebase from 'firebase/app'


export const contactusAction = async ({ data })=>{
    let name = data.name
    let email = data.email
    let comment = data.comment

    try {
        validateContactForm({ name , email , comment })
    } catch (e) {
        return flux.dispatchEvent( CONTACT_ERROR , e)
    }


    // call cloud functions
    const sendEmailWhithGmail = firebase.functions().httpsCallable("sendEmailWhithGmail")
    let gmail
    try {
        gmail = await sendEmailWhithGmail({ data })     
    } catch (e) {
        return flux.dispatchEvent(CONTACT_ERROR , e)
    }

   return flux.dispatchEvent(CONTACT_SENDED, {})

    
}




 


