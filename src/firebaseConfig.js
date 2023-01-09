import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCc4JbjLLt9_-l4rC4KXusCaPklkPgLXA8",
  authDomain: "greydive-e3803.firebaseapp.com",
  projectId: "greydive-e3803",
  storageBucket: "greydive-e3803.appspot.com",
  messagingSenderId: "227063545466",
  appId: "1:227063545466:web:d501c34f572764b4df05c3",
  measurementId: "G-T0GB1ND76C",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
