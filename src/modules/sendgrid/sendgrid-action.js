// import functions from '../../config/index'
import firebase from 'firebase/app'
//  firebase.functions()


export const sendGridAction = async ({ data }) =>{

   const sendGridEmail = firebase.functions().httpsCallable("sendGridEmail");

    sendGridEmail( { data } ).then((result)=>{
        console.log(result)
    })
   

} 