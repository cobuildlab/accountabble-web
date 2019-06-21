import firebase from 'firebase/app'
import {contactusAction} from '../../modules/contact-us/contactus-action'

/**
 * @param  {objet} {data}
 */
export const gmailAction = async ({ data }) => {
    
    try {
        contactusAction({data})
    } catch (error) {
        console.log(error)
    }


    let gmail
    const sendEmailWhithGmail = firebase.functions().httpsCallable("sendEmailWhithGmail")

    try {
        gmail = await sendEmailWhithGmail({data})     
    } catch (error) {
        console.log(error)
    }
    
    console.log('the function returns null')

}