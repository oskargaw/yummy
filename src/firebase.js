import { firebase } from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQvzXx584PUlCCaHWOiepzqmVhCnZbu2c",
  authDomain: "yummy-b85f3.firebaseapp.com",
  databaseURL: "https://yummy-b85f3.firebaseio.com",
  projectId: "yummy-b85f3",
  storageBucket: "yummy-b85f3.appspot.com",
  messagingSenderId: "323327735444",
  appId: "1:323327735444:web:f4ba10ea38ee24b5f82681",
  measurementId: "G-KPQTL8NE9V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();