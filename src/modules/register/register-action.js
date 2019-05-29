import firebase from 'firebase';
import Flux from 'flux-state';
import { REGISTER_ERROR, REGISTER_EVENT } from './register-store';

export const registerAction = async (userData) => {
  const email = userData.basicInformation.email;
  const database = firebase.firestore();
  const userColletion = database.collection('users');
  const userRef = await userColletion.doc(email).get();
  
  if(userRef.exists){
    const e = 'the user is already registered';
    return Flux.dispatchEvent(REGISTER_ERROR,e);
  }
  
  try { 
    await database.collection('users').doc(email).add(userData);
  } catch (err) {
    return Flux.dispatchEvent(REGISTER_ERROR, err);
  }
  return Flux.dispatchEvent(REGISTER_EVENT, null);
};  