import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxoEiAC9SBZAlx_9lV9z5BbK0oukJFKPs",
  authDomain: "uber-next-clone-live-d0ddb.firebaseapp.com",
  projectId: "uber-next-clone-live-d0ddb",
  storageBucket: "uber-next-clone-live-d0ddb.appspot.com",
  messagingSenderId: "24016065183",
  appId: "1:24016065183:web:ce5978d7f1e866459708aa",
};

// Check if the Firebase app has already been initialized
const app = initializeApp(firebaseConfig, "uber-challange-clone", false);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export { app, provider, auth };
