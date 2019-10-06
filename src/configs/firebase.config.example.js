import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // Your firebase config here
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;
