// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyD9gpLWQ9N7GvkSIsswzUx1BOwJNcZ9wwI",
  authDomain: "blur-login-c4935.firebaseapp.com",
  projectId: "blur-login-c4935",
  storageBucket: "blur-login-c4935.appspot.com",
  messagingSenderId: "445932638640",
  appId: "1:445932638640:web:f279f3988b95c164a70675"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);