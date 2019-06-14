import flux from 'flux-state';
import { CONTACT_SENDED , CONTACT_ERROR } from './contactus-store';
import { validateContactForm } from  '../../utils/validateForm'


export const contactusAction = ({ name, email, comment })=>{
    
    try {
        validateContactForm({ name , email , comment })
    } catch (e) {
        return flux.dispatchEvent(CONTACT_ERROR , e)
    }

   return flux.dispatchEvent(CONTACT_SENDED, {})

    
}




 


