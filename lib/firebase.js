import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCZ9q55RWWrny9_lRSp6g2YKLAYbQb8KWA",
  authDomain: "nextfire-dbc6b.firebaseapp.com",
  projectId: "nextfire-dbc6b",
  storageBucket: "nextfire-dbc6b.appspot.com",
  messagingSenderId: "517820509251",
  appId: "1:517820509251:web:d599e94fa5b452ba0af8f6",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
