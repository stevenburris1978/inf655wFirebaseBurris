// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3CqK-sojUwAtnJ0giN_QEYghy8RXdbWc",
    authDomain: "cart-app-80423.firebaseapp.com",
    projectId: "cart-app-80423",
    storageBucket: "cart-app-80423.appspot.com",
    messagingSenderId: "714848493379",
    appId: "1:714848493379:web:81c33c78688a7782b419f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;