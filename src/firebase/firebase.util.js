import firebase from "firebase/app";
import "firebase/firestore";

import "firebase/auth";

const config = {
  apiKey: "AIzaSyBJksL78CxvzJJ2yFAUjpdSMCnSdUZm0lY",
  authDomain: "v4v-eselling-6130e.firebaseapp.com",
  projectId: "v4v-eselling-6130e",
  storageBucket: "v4v-eselling-6130e.appspot.com",
  messagingSenderId: "507385116116",
  appId: "1:507385116116:web:882d51c4099126caf31241",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
