import flux from 'flux-state';
import { CONTACT_SENDED , CONTACT_ERROR } from './contactus-store';
import { validateForm } from  '../../utils/validateForm'


export const contactusAction = ({ name, email, comment })=>{
    
    try {
        validateForm({ name , email , comment })
    } catch (e) {
        return flux.dispatchEvent(CONTACT_ERROR , e)
    }

   return flux.dispatchEvent(CONTACT_SENDED, {})

    
}




 


