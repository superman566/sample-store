import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuoKJAJdOlsdLvIaxdgRFrQ9Hc_fkRXuE",
  authDomain: "react-sample-store-ac05c.firebaseapp.com",
  projectId: "react-sample-store-ac05c",
  storageBucket: "react-sample-store-ac05c.appspot.com",
  messagingSenderId: "825190863689",
  appId: "1:825190863689:web:5a15b4eac50fe09ed3c098"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
