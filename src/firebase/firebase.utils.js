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

export const createUserProfileDocument = async (userAuth, extraData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // const userRef = firestore.collection('users').doc(userAuth.uid);
  const snapShot = await userRef.get();
  if(!snapShot.exists) {
    const {
      displayName,
      email
    } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...extraData
      })
    } catch (e) {
      console.log('error creating user', e.message);
    }
  }

  return userRef;
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
