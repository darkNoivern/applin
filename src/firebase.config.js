import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAD-pgyWFoV0b8pC7thIuY1vPsy3tok0sg",
    authDomain: "budgetbuddy-a2ed1.firebaseapp.com",
    projectId: "budgetbuddy-a2ed1",
    storageBucket: "budgetbuddy-a2ed1.appspot.com",
    messagingSenderId: "526312248842",
    appId: "1:526312248842:web:8e21339443b4643648b1f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };