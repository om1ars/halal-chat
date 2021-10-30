import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD1Ttc04bWAvrV2i86R9S1jyLMhN2CK83c",
  authDomain: "slakc-clone-992d5.firebaseapp.com",
  projectId: "slakc-clone-992d5",
  storageBucket: "slakc-clone-992d5.appspot.com",
  messagingSenderId: "720887217390",
  appId: "1:720887217390:web:b96a37508ce0c7cb4847ff",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
