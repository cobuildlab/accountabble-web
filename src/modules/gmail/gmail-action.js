import firebase from 'firebase/app'


export const gmailAction = async ({ data }) => {
    
    let gmail
    const sendEmailWhithGmail = firebase.functions().httpsCallable("sendEmailWhithGmail")

    try {
        gmail = await sendEmailWhithGmail({data})     
    } catch (error) {
        console.log(error)
    }
    
    console.log('the function returns null')

}