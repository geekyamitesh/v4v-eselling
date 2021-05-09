import firebase from "firebase/app";
import "firebase/firestore";

import "firebase/auth";

const config = {
  apiKey: "AIzaSyAQjqfsh6414y6SdXazxCh2B1XfDORtOXY",
  authDomain: "v4vwebsites.firebaseapp.com",
  projectId: "v4vwebsites",
  storageBucket: "v4vwebsites.appspot.com",
  messagingSenderId: "489841222117",
  appId: "1:489841222117:web:2414cc9595dd05b8b88f0c",
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
