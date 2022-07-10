import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCYYzCSTopYc3JerPxnB17PIfKjtc50c5w",
  authDomain: "utbk-747d7.firebaseapp.com",
  projectId: "utbk-747d7",
  storageBucket: "utbk-747d7.appspot.com",
  messagingSenderId: "239387520436",
  appId: "1:239387520436:web:c461cdc9004cbedc8f16e1",
  measurementId: "G-XZ7LRPN79Z",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
