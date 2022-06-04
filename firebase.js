import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoiJD-a4EZcqBX7QQCBuHOtCWYeWW0O7Y",
  authDomain: "signal-clone-bd863.firebaseapp.com",
  projectId: "signal-clone-bd863",
  storageBucket: "signal-clone-bd863.appspot.com",
  messagingSenderId: "399763488901",
  appId: "1:399763488901:web:7754024be8321eb01069ec",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
