import flux from 'flux-state';
import { CONTACT_SENDED , CONTACT_ERROR } from './contactus-store';
import { validateForm } from  '../../utils/validateForm'


export const contactusAction = ({ name, email, comment })=>{
    
    //  if(validateForm({ name , email, comment }) === true){
    //      return 'no sirve'
    //  }
    //  console.log('aqui 4', validateForm({name,email,comment}))

    try {
        validateForm({ name , email , comment })
    } catch (e) {
        return flux.dispatchEvent(CONTACT_ERROR , e)
    }

   return flux.dispatchEvent(CONTACT_SENDED, {})

    
}




 


