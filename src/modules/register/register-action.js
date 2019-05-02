import firebase from 'firebase';
import Flux from 'flux-state';
import { REGISTER_ERROR, REGISTER_EVENT } from './register-store';

export const registerAction = async (userData) => {
  const database = firebase.firestore();
  const usersRef = database.collection('users').doc('management');
  try { 
    await usersRef.set(userData, { merge: true });
  } catch (err) {
    return Flux.dispatchEvent(REGISTER_ERROR, err);
  }
  return Flux.dispatchEvent(REGISTER_EVENT, null);
};  