import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1Ttc04bWAvrV2i86R9S1jyLMhN2CK83c",
  authDomain: "slakc-clone-992d5.firebaseapp.com",
  projectId: "slakc-clone-992d5",
  storageBucket: "slakc-clone-992d5.appspot.com",
  messagingSenderId: "720887217390",
  appId: "1:720887217390:web:b96a37508ce0c7cb4847ff",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebase)